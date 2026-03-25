import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferreirafernanda.com"),
  title: {
    default: "Dra. Fernanda Ferreira | Ortodontia e Invisalign em Florianópolis",
    template: "%s | Dra. Fernanda Ferreira",
  },
  description: "Ortodontista especialista em Florianópolis. Transformando sorrisos com Invisalign®, facetas cerâmicas e tecnologia digital de ponta.",
  keywords: ["Ortodontista Florianópolis", "Invisalign", "Aparelho Invisível", "Facetas de Porcelana Centro", "Odontologia Digital", "Dra Fernanda Ferreira"],
  authors: [{ name: "LenKi", url: "https://lenki.com.br" }, { name: "Dra. Fernanda Ferreira" }],
  creator: "LenKi",
  publisher: "LenKi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ferreirafernanda.com",
    title: "Dra. Fernanda Ferreira | Ortodontia Especializada",
    description: "Descubra como a Ortodontia Digital pode renovar sua estética facial e eficiência mastigatória com conforto.",
    siteName: "Ferreira Odontologia",
    images: [
      {
        url: "/lead-assets/dra.ferreira.png",
        width: 1200,
        height: 630,
        alt: "Dra. Fernanda Ferreira Especialista em Ortodontia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Fernanda Ferreira | Ortodontia",
    description: "Transformando sorrisos no coração de Florianópolis.",
    images: ["/lead-assets/dra.ferreira.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", dmSans.variable, dmSerifDisplay.variable)}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
