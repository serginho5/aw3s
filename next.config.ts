import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantém as URLs no mesmo formato do WordPress (/quem-somos/).
  trailingSlash: true,
  async redirects() {
    // O blog não existe na nova versão: URLs antigas de posts, categorias
    // e páginas de rascunho voltam para a home sem perder o link.
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/",
        destination: "/",
        permanent: true,
      },
      { source: "/category/:slug*", destination: "/", permanent: true },
      { source: "/base/", destination: "/", permanent: true },
      { source: "/pagina-exemplo/", destination: "/", permanent: true },
      { source: "/agencia-de-criacao-de-sites/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
