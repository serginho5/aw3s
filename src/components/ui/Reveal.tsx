"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "down" | "up" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  down: { y: -48 },
  up: { y: 48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

/**
 * Entrada ao rolar a página — equivale ao "fadeInDown" (e variações) do Elementor.
 * `delay` em milissegundos, como no painel do Elementor.
 */
export default function Reveal({
  children,
  direction = "down",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, ...OFFSET[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
