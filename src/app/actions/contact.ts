"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { contactChannels, site } from "@/content/site";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<"name" | "email" | "channel" | "message", string>>;
    };

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.email("Informe um e-mail válido."),
  channel: z.enum(contactChannels, "Escolha como deseja ser contatado."),
  message: z.string().trim().max(2000, "Mensagem muito longa.").optional().default(""),
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: robôs preenchem o campo escondido, pessoas não.
  if (formData.get("company")) return { status: "success" };

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    channel: String(formData.get("channel") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const parsed = schema.safeParse({ ...values, message: values.message || undefined });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", message: "Confira os campos destacados.", fieldErrors };
  }

  const { name, email, channel, message } = parsed.data;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contato] SMTP não configurado; mensagem recebida em dev:", parsed.data);
      return { status: "success" };
    }
    console.error("[contato] SMTP_HOST ausente em produção.");
    return { status: "error", message: "Não foi possível enviar agora. Tente pelo WhatsApp." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 465),
      secure: Number(SMTP_PORT ?? 465) === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });

    await transporter.sendMail({
      from: CONTACT_FROM ?? SMTP_USER ?? site.email,
      to: CONTACT_TO ?? site.email,
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nPrefere contato por: ${channel}\n\n${message}`,
      html: `<p><b>Nome:</b> ${escape(name)}<br><b>E-mail:</b> ${escape(email)}<br><b>Prefere contato por:</b> ${escape(channel)}</p><p>${escape(message).replace(/\n/g, "<br>")}</p>`,
    });

    return { status: "success" };
  } catch (err) {
    console.error("[contato] falha ao enviar:", err);
    return { status: "error", message: "Não foi possível enviar agora. Tente novamente em instantes." };
  }
}
