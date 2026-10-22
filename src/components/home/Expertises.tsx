import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { home } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

export default function Expertises() {
  const { title, text, cta, pillars } = home.expertises;

  return (
    <section className="py-16 md:py-20">
      <div className="container-site grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal direction="right">
          <h2 className="mb-5 font-poppins text-3xl font-semibold text-navy md:text-[34px] md:leading-[44px]">{title}</h2>
          <p className="mb-8 font-roboto leading-6 text-muted">{text}</p>
          <Link
            href="/quem-somos/"
            className="inline-block rounded bg-navy px-8 py-3.5 font-poppins text-white shadow-[inset_-32px_0_30px_0_var(--color-purple)] transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:shadow-[inset_-260px_0_30px_0_var(--color-purple)]"
          >
            {cta}
          </Link>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal direction="up" delay={i * 150} className="h-full">
                <div className="group h-full rounded-xl border border-surface bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-card">
                  <CircleCheck className="mb-3 size-7 text-teal transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mb-1 font-poppins font-semibold text-navy">{p.title}</h3>
                  <p className="font-roboto text-sm leading-6 text-muted">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
