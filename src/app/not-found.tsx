import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-gradient text-white">
      <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="mb-2 font-display text-7xl">404</p>
        <h1 className="mb-4 font-display text-3xl">Página não encontrada</h1>
        <p className="mb-8 max-w-md text-white/80">O conteúdo que você procura não existe ou foi movido.</p>
        <Link
          href="/"
          className="rounded-full bg-white px-8 py-3 font-semibold text-brand-deep shadow-glow-soft transition hover:-translate-y-0.5"
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
}
