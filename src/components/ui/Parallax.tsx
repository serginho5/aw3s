"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Efeito de rolagem do Elementor Pro (Motion Effects → Scrolling):
 * desloca o elemento no eixo Y e, opcionalmente, faz o fade "out-in".
 * `speed` segue a escala do Elementor (1 ≈ 60px de deslocamento total).
 */
export default function Parallax({
  children,
  speed = 1,
  direction = "positive",
  fade = false,
  className,
}: {
  children: ReactNode;
  speed?: number;
  direction?: "positive" | "negative";
  fade?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const distance = 60 * speed * (direction === "negative" ? -1 : 1);
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.15, 1, 1, 0.15]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { y, opacity: fade ? opacity : undefined }}
    >
      {children}
    </motion.div>
  );
}
