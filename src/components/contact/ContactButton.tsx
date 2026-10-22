"use client";

import type { ReactNode } from "react";
import { useContact } from "./ContactProvider";

/** Botão que abre o popup de contato — substitui o "popup:open" do Elementor. */
export default function ContactButton({ children, className }: { children: ReactNode; className?: string }) {
  const { open } = useContact();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
