"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import ContactModal from "./ContactModal";

const ContactContext = createContext<{ open: () => void; close: () => void } | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact precisa estar dentro de <ContactProvider>");
  return ctx;
}

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ open, close }}>
      {children}
      <ContactModal open={isOpen} onClose={close} />
    </ContactContext.Provider>
  );
}
