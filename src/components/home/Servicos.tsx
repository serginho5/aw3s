import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/site";
import ContactButton from "@/components/contact/ContactButton";
import Reveal from "@/components/ui/Reveal";

export default function Servicos() {
  const { kicker, title, cta, items } = home.servicos;

  return (
    <section id="servicos" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/shapes-icons.png')] bg-contain bg-center bg-no-repeat opacity-50" />
      <div className="container-site relative">
        <Reveal direction="up">
          <p className="mb-2 text-lg font-light text-indigo md:text-xl">{kicker}</p>
          <h2 className="mb-12 max-w-3xl font-display text-4xl text-amber md:text-[45px] md:leading-[54px]">{title}</h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 150}>
              <article className="group h-full rounded-xl bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgb(70_50_218/0.3)] md:p-10">
                <div className="relative mb-6 size-12">
                  <span className="absolute -inset-2 rounded-full bg-purple/10 transition-transform duration-500 group-hover:scale-125" aria-hidden />
                  <Image src={item.image} alt="" width={500} height={440} className="relative size-12 object-contain" />
                </div>
                <h3 className="mb-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mb-5 text-sm leading-6 text-muted">{item.text}</p>
                <ContactButton className="inline-flex items-center gap-2 text-sm font-medium text-purple-dark">
                  {cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </ContactButton>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
