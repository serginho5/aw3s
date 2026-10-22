"use client";

import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { startTransition, useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { contactChannels } from "@/content/site";

const field =
  "w-full rounded-md border border-[#c6c4cf] bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-[#a0a0a8] focus:border-sky focus:ring-2 focus:ring-sky/30 aria-[invalid=true]:border-red-500";

export default function ContactForm({ onDone }: { onDone?: () => void }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  useEffect(() => {
    if (state.status !== "success" || !onDone) return;
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [state, onDone]);

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 py-10 text-center"
        role="status"
      >
        <CircleCheck className="size-12 text-teal" />
        <p className="font-display text-xl text-indigo">Mensagem enviada!</p>
        <p className="text-sm text-muted">Em breve nosso time entra em contato com você.</p>
      </motion.div>
    );
  }

  return (
    <form
      noValidate
      className="grid gap-3"
      // Envio via onSubmit para o React 19 não limpar os campos quando a validação falha.
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => action(data));
      }}
    >
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field error={errors.name}>
          <input name="name" placeholder="Nome" autoComplete="name" aria-label="Nome" aria-invalid={!!errors.name} className={field} />
        </Field>
        <Field error={errors.email}>
          <input name="email" type="email" placeholder="E-mail" autoComplete="email" aria-label="E-mail" aria-invalid={!!errors.email} className={field} />
        </Field>
      </div>
      <Field error={errors.channel}>
        <select name="channel" defaultValue="" required aria-label="Como deseja ser contatado?" aria-invalid={!!errors.channel} className={`${field} text-[#7a7a7a]`}>
          <option value="" disabled>
            Como deseja ser contatado?
          </option>
          {contactChannels.map((c) => (
            <option key={c} value={c} className="text-ink">
              {c}
            </option>
          ))}
        </select>
      </Field>
      <Field error={errors.message}>
        <textarea name="message" rows={4} placeholder="Mensagem" aria-label="Mensagem" className={`${field} resize-y`} />
      </Field>

      {state.status === "error" && (
        <p role="alert" className="text-xs text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-sky px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo disabled:opacity-70"
      >
        {pending ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
        {pending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
