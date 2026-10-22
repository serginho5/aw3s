import Link from "@/components/ui/SmartLink";
import { ChevronRight, Heart } from "lucide-react";
import { footerAbout, footerServices, nav } from "@/content/site";
import SocialIcons from "@/components/ui/SocialIcons";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-l-[3px] border-coral pl-3 font-poppins text-[15px] font-semibold tracking-wider text-white uppercase">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Title>Sobre nós</Title>
          <p className="max-w-sm text-[13px] leading-relaxed text-white/90">
            {footerAbout.split("AW3S").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-coral">AW3S</strong>}
              </span>
            ))}
          </p>
        </div>

        <div>
          <Title>Menu</Title>
          <ul className="space-y-2.5 text-[13px] font-semibold">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="group inline-flex items-center gap-2 transition hover:text-coral">
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Title>Serviços</Title>
          <ul className="space-y-2.5 text-[13px] font-semibold">
            {footerServices.map((s) => (
              <li key={s}>
                <Link href="/#servicos" className="group inline-flex items-center gap-2 transition hover:text-coral">
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Title>Redes sociais</Title>
          <SocialIcons className="gap-5" iconClassName="size-6" />
        </div>
      </div>

      <div className="bg-black">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
          <p className="inline-flex items-center gap-1">
            Feito com <Heart className="size-3.5 fill-red-500 text-red-500" aria-label="amor" /> por{" "}
            <strong className="text-white">aw3s</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
