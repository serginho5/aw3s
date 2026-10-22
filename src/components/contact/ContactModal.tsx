"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { contactModal } from "@/content/site";
import ContactForm from "./ContactForm";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("input, select, textarea")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="relative grid w-full max-w-[640px] overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-[0.95fr_1.6fr]"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <aside className="hidden flex-col items-center justify-center gap-4 bg-[linear-gradient(170deg,#4054b2_0%,#0f8dd9_100%)] px-6 py-10 text-center text-white md:flex">
              <div className="grid size-28 place-items-center rounded-full bg-white">
                <Image src="/images/10.png" alt="" width={84} height={84} />
              </div>
              <p className="font-display text-2xl leading-tight">{contactModal.asideTitle}</p>
              <p className="text-sm font-semibold">{contactModal.asideText}</p>
            </aside>

            <div className="px-6 pt-8 pb-6 md:px-7">
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="absolute top-3 right-3 grid size-8 place-items-center rounded-full text-ink transition hover:rotate-90 hover:bg-surface"
              >
                <X className="size-4" />
              </button>
              <h2 id="contact-title" className="text-center font-display text-2xl text-indigo">
                {contactModal.title}
              </h2>
              <p className="mt-1 mb-5 text-center text-xs text-muted">{contactModal.subtitle}</p>
              <ContactForm onDone={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
