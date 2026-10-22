import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/site";
import ContactButton from "@/components/contact/ContactButton";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import SocialIcons from "@/components/ui/SocialIcons";
import Wave from "@/components/ui/Wave";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Estratégia, criatividade e tecnologia a serviço da reputação da sua empresa. Conheça a equipe e os valores da AW3S.",
  alternates: { canonical: "/quem-somos/" },
};

// Cantos arredondados alternados dos cards de valores, como no layout original.
const CORNERS = ["rounded-bl-[70px]", "", "rounded-tr-[70px]", "rounded-bl-[70px]", ""];

export default function QuemSomosPage() {
  const { hero, world, values, team, cta } = about;

  return (
    <>
      <section className="bg-brand-gradient relative overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 bg-[url('/images/bg-intro-about.png')] bg-cover bg-center opacity-[0.15]" />
        <div className="container-site relative pt-16 pb-36 text-center md:pt-24 md:pb-44">
          <Reveal direction="up">
            <h1 className="mx-auto max-w-3xl font-display text-3xl leading-tight md:text-[40px]">{hero.title}</h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mt-5 text-lg font-light">{hero.kicker}</p>
          </Reveal>
        </div>
        <Wave position="bottom" className="text-white" />
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden className="absolute inset-0 bg-[url('/images/bg-about-new.png')] bg-cover bg-top" />
        <div className="container-site relative grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal direction="right">
              <h2 className="mb-6 font-display text-3xl text-purple-dark md:text-4xl">{world.title}</h2>
            </Reveal>
            <div className="grid gap-6 font-roboto text-sm leading-6 text-ink sm:grid-cols-2">
              {world.columns.map((col, i) => (
                <Reveal key={i} direction="right" delay={i * 150} className="space-y-4">
                  {col.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                  {i === world.columns.length - 1 && (
                    <div className="pt-2">
                      <h3 className="font-display text-lg text-purple-dark">{world.values.title}</h3>
                      <p className="mb-3 text-muted">{world.values.subtitle}</p>
                      <p className="mb-2 text-xs font-semibold tracking-widest text-sky uppercase">{world.values.follow}</p>
                      <SocialIcons className="gap-4 text-purple-dark" iconClassName="size-5" />
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
          <Parallax speed={0.8} className="flex justify-center">
            <Image
              src="/images/about-page-intro-pic.png"
              alt="Equipe da AW3S reunida no escritório"
              width={440}
              height={440}
              className="w-full max-w-[400px] rounded-[42%_58%_48%_52%/40%_46%_54%_60%] object-cover shadow-2xl"
            />
          </Parallax>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-[url('/images/we-believe-bg.png')] bg-contain bg-center bg-no-repeat" />
        <div className="container-site relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} direction="up" delay={(i % 3) * 150}>
              <article
                className={`h-full rounded-xl bg-white px-8 py-12 shadow-value transition duration-300 hover:-translate-y-2 ${CORNERS[i]}`}
              >
                <h3 className="mb-4 font-display text-lg text-purple-dark">{v.title}</h3>
                <p className="font-roboto text-sm leading-6 text-ink">{v.text}</p>
              </article>
            </Reveal>
          ))}
          <Reveal direction="left" delay={300} className="flex flex-col justify-center px-2 py-6">
            <h2 className="mb-3 font-display text-2xl leading-snug text-muted">{team.title}</h2>
            <p className="font-roboto text-sm leading-6 text-ink">{team.text}</p>
          </Reveal>
        </div>

        <Reveal direction="up" className="container-site relative mt-14 text-center">
          <p className="mb-5 font-display text-lg text-purple-dark">{cta.question}</p>
          <ContactButton className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-purple-dark">
            {cta.button}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </ContactButton>
        </Reveal>
      </section>
    </>
  );
}
