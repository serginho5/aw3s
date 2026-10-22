"use client";

import Image from "next/image";
import Link from "@/components/ui/SmartLink";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import SocialIcons from "@/components/ui/SocialIcons";

/** Seção visível na home — equivale ao menu "ativo" do Elementor (scrollspy). */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    if (!enabled) return;
    const ids = nav.map((n) => n.section).filter(Boolean) as string[];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (item: (typeof nav)[number]) =>
    isHome ? item.section === active : item.section === null && pathname.startsWith(item.href);

  return (
    <header
      className={`bg-brand-gradient sticky top-0 z-40 text-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgb(0_0_0/0.3)]" : ""
      }`}
    >
      <div className="container-site flex h-[70px] items-center justify-between md:h-[78px]">
        <Link href="/" aria-label="aw3s — página inicial" className="shrink-0">
          <Image src="/images/logo_aw3s_branco.png" alt="aw3s" width={66} height={55} priority className="h-11 w-auto md:h-[52px]" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item) ? "true" : undefined}
              className="group relative px-3 py-2 text-sm font-semibold transition-colors hover:text-[#6ee8c8] aria-[current]:text-[#6ee8c8]"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-[#6ee8c8] transition-transform duration-300 group-hover:scale-x-100 group-aria-[current]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <SocialIcons className="hidden gap-4 lg:flex" iconClassName="size-[17px]" />

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Menu mobile"
            className="overflow-hidden border-t border-white/15 bg-[#0700dd]/95 lg:hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="container-site flex flex-col py-3">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.05 * i } }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(item) ? "true" : undefined}
                    className="block py-3 font-semibold aria-[current]:text-[#6ee8c8]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-3 pb-2">
                <SocialIcons className="gap-6" iconClassName="size-5" />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
