"use client";

import { Mail, MessagesSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useContact } from "./ContactProvider";

/**
 * Botões flutuantes:
 * - esquerda: envelope que abre o popup de contato (Elementor Pro popup 264);
 * - direita: widget de chat com WhatsApp e Messenger (antigo GetButton.io).
 */
export default function FloatingActions() {
  const { open } = useContact();
  const [chatOpen, setChatOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const channels = [
    {
      label: "Messenger",
      href: `https://m.me/${site.messenger}`,
      className: "bg-[#0a7cff]",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 fill-white" aria-hidden>
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.53-.04.91.25 1.89.39 2.9.39 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${site.whatsapp}`,
      className: "bg-[#4dc247]",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 fill-white" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.16 12c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <motion.button
        type="button"
        onClick={open}
        aria-label="Abrir formulário de contato"
        className="fixed bottom-6 left-6 z-50 grid size-12 place-items-center rounded-full bg-purple-dark text-white shadow-glow-soft md:bottom-8 md:left-8 md:size-14"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-purple-dark/40 [animation-duration:2.4s]" aria-hidden />
        <Mail className="relative size-5 md:size-6" />
      </motion.button>

      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3 md:right-8 md:bottom-8">
        <AnimatePresence>
          {chatOpen &&
            channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className={`group relative grid size-12 place-items-center rounded-full shadow-lg ${c.className}`}
                initial={{ opacity: 0, y: 16, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: (channels.length - 1 - i) * 0.06 } }}
                exit={{ opacity: 0, y: 16, scale: 0.6 }}
                whileHover={{ scale: 1.08 }}
              >
                {c.icon}
                <span className="pointer-events-none absolute right-full mr-3 rounded bg-white px-2 py-1 text-xs whitespace-nowrap text-ink opacity-0 shadow transition group-hover:opacity-100">
                  {c.label}
                </span>
              </motion.a>
            ))}
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <AnimatePresence>
            {showHint && !chatOpen && (
              <motion.button
                type="button"
                onClick={() => setChatOpen(true)}
                className="relative hidden rounded-md bg-white px-3 py-1.5 text-xs text-ink shadow-[0_2px_10px_rgb(0_0_0/0.15)] sm:block"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
              >
                Entre em contato conosco!
                <span className="absolute top-1/2 -right-1.5 size-3 -translate-y-1/2 rotate-45 bg-white" aria-hidden />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.button
            type="button"
            onClick={() => setChatOpen((v) => !v)}
            aria-expanded={chatOpen}
            aria-label={chatOpen ? "Fechar canais de atendimento" : "Abrir canais de atendimento"}
            className="grid size-12 place-items-center rounded-full bg-coral text-white shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <motion.span key={chatOpen ? "x" : "chat"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
              {chatOpen ? <X className="size-5" /> : <MessagesSquare className="size-5" />}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
