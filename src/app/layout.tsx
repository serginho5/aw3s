import type { Metadata, Viewport } from "next";
import { Montserrat, Nunito, Poppins, Roboto, Varela_Round } from "next/font/google";
import ContactProvider from "@/components/contact/ContactProvider";
import FloatingActions from "@/components/contact/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"], variable: "--nf-montserrat" });
const varela = Varela_Round({ subsets: ["latin"], weight: "400", variable: "--nf-varela" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--nf-poppins" });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--nf-roboto" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"], variable: "--nf-nunito" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AW3S | Agência digital para empresas que querem ser referência",
    template: "%s | AW3S",
  },
  description:
    "Agência digital de criação de sites, SEO e conteúdo para empresas que querem ser referência no seu mercado. Fale com um especialista da AW3S.",
  icons: { icon: "/images/cropped-logo_aw3s-192x192.png", apple: "/images/cropped-logo_aw3s-192x192.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "aw3s",
    images: ["/images/logo_aw3s.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0700dd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${varela.variable} ${poppins.variable} ${roboto.variable} ${nunito.variable}`}
    >
      <body>
        <ContactProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ContactProvider>
      </body>
    </html>
  );
}
