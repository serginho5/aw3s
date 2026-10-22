import Image from "next/image";
import { home } from "@/content/site";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";

export default function Metodologia() {
  const { title, subtitle, steps, highlight } = home.metodologia;

  return (
    <section id="metodologia" className="pt-20 pb-36 md:pt-24 md:pb-44">
      <div className="container-site grid items-center gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <Reveal direction="up">
            <h2 className="mb-3 font-poppins text-3xl font-semibold text-[#00a8e8] md:text-[34px]">[{title}]</h2>
            <p className="mb-8 font-display text-2xl leading-snug text-ink">{subtitle}</p>
          </Reveal>
          <Parallax speed={0.5} fade className="hidden justify-center md:flex">
            <Image src="/images/img7.png" alt="" width={247} height={247} />
          </Parallax>
        </div>

        <div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal direction="up" delay={i * 150} className="h-full">
                  <div className="group h-full rounded-xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1">
                    <span className="mb-4 grid size-10 place-items-center rounded-full bg-purple/10 font-poppins font-semibold text-purple transition-colors duration-300 group-hover:bg-purple group-hover:text-white">
                      {i + 1}
                    </span>
                    <h3 className="mb-2 font-poppins font-semibold text-navy">{step.title}</h3>
                    <p className="font-roboto text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Parallax speed={0.6} fade className="mt-8">
            <p className="font-poppins text-lg font-semibold text-purple md:text-xl md:leading-snug">{highlight}</p>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
