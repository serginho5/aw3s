"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

/**
 * Link que rola suavemente até a âncora quando ela está na página atual
 * (ex.: "/#servicos" estando na home). O <Link> do Next nem sempre rola
 * em navegação de hash na mesma página, principalmente se o hash não muda.
 */
export default function SmartLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    const [path, hash] = href.split("#");
    if ((path || "/") !== pathname) return;

    const target = hash ? document.getElementById(hash) : null;
    if (hash && !target) return;

    e.preventDefault();
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", hash ? `#${hash}` : path || "/");
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
