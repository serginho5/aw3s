import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/site";
import ContactButton from "@/components/contact/ContactButton";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import Wave from "@/components/ui/Wave";

export default function Hero() {
  const { kicker, title, text, cta } = home.hero;

  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-deep text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/bg-homepage-high.png')] bg-cover bg-center opacity-[0.12]"
      />
      <div className="container-site relative grid items-center gap-8 pt-14 pb-28 md:grid-cols-2 md:pt-20 md:pb-36">
        <div>
          <Reveal direction="up">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan uppercase md:text-base">{kicker}</p>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="mb-6 font-display text-4xl leading-[1.2] md:text-[45px]">{title}</h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="mb-8 max-w-md text-[15px] leading-relaxed font-light md:text-base">{text}</p>
          </Reveal>
          <Reveal direction="up" delay={360}>
            <ContactButton className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-[15px] font-medium shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-deep">
              {cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </ContactButton>
          </Reveal>
        </div>

        <Parallax speed={1} className="relative z-[2] flex justify-center md:justify-end">
          <Image
            src="/images/homen_login.png"
            alt="Homem sentado com notebook pensando em seu novo site"
            width={776}
            height={785}
            priority
            sizes="(min-width: 768px) 460px, 80vw"
            className="h-auto w-[80%] max-w-[460px] drop-shadow-2xl md:w-full"
          />
        </Parallax>
      </div>
      <Wave position="bottom" className="text-white" />
    </section>
  );
}
