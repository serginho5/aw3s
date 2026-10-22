import Cta from "@/components/home/Cta";
import Expertises from "@/components/home/Expertises";
import Hero from "@/components/home/Hero";
import Metodologia from "@/components/home/Metodologia";
import Servicos from "@/components/home/Servicos";
import Sobre from "@/components/home/Sobre";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertises />
      <Sobre />
      <Servicos />
      <Metodologia />
      <Cta />
    </>
  );
}
