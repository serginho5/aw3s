import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/site";
import ContactButton from "@/components/contact/ContactButton";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import Wave from "@/components/ui/Wave";

export default function Cta() {
  const { title, text, button } = home.cta;

  return (
    <section className="bg-brand-gradient relative overflow-hidden text-white">
      <Wave position="top" className="text-white" />
      <div aria-hidden className="absolute inset-0 bg-[url('/images/cta-shapes.png')] bg-cover bg-bottom opacity-25" />
      <div className="container-site relative grid items-center gap-10 pt-32 pb-20 md:grid-cols-2 md:pt-40 md:pb-24">
        <Reveal direction="up">
          <h2 className="mb-5 font-display text-3xl leading-tight md:text-[34px]">{title}</h2>
          <p className="mb-10 max-w-md text-[15px] leading-snug font-medium">{text}</p>
          <ContactButton className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-cyan shadow-glow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-cyan hover:text-white">
            {button}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </ContactButton>
        </Reveal>

        <Parallax speed={1} direction="negative" className="flex justify-center">
          <Image
            src="/images/cta-home-page-new.png"
            alt="Equipe da AW3S trabalhando em projetos de sites"
            width={400}
            height={400}
            sizes="(min-width: 768px) 360px, 75vw"
            className="w-[75%] max-w-[360px] rounded-[45%_55%_42%_58%/38%_44%_56%_62%] object-cover shadow-2xl"
          />
        </Parallax>
      </div>
    </section>
  );
}
