import Link from "next/link";
import { BriefcaseBusiness, ChartPie, Coins, MessagesSquare } from "lucide-react";
import { home } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

const ICONS = { briefcase: BriefcaseBusiness, coins: Coins, chart: ChartPie };

function Card({ icon: Icon, title, text }: { icon: typeof MessagesSquare; title: string; text: string }) {
  return (
    <div className="group h-full rounded-md bg-white px-6 py-9 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgb(70_50_218/0.35)]">
      <Icon className="mx-auto mb-4 size-9 stroke-[1.5] text-purple-dark transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      <h3 className="mb-3 font-roboto text-[13px] font-semibold tracking-widest text-sky uppercase">{title}</h3>
      <p className="font-roboto text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}

export default function Sobre() {
  const { title, text, history, pillars } = home.sobre;

  return (
    <section id="sobre" className="relative overflow-hidden bg-[#1c2580] bg-[url('/images/fundo_sobre.png')] bg-cover bg-center py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal>
            <h2 className="mb-6 max-w-lg font-poppins text-3xl font-semibold text-sky md:text-[34px] md:leading-[44px]">{title}</h2>
            <p className="font-roboto leading-7 font-light text-white/90">
              {text.map((t, i) =>
                typeof t === "string" ? t : (
                  <strong key={i} className="font-semibold text-coral">
                    {t.strong}
                  </strong>
                ),
              )}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <Link href="/quem-somos/" className="block">
              <Card icon={MessagesSquare} title={history.title} text={history.text} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 200}>
              <Card icon={ICONS[p.icon as keyof typeof ICONS]} title={p.title} text={p.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
