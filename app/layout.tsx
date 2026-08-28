import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PCM Plus — Formação Industrial",
  description:
    "Plataforma profissional de formação em Planejamento e Controle da Manutenção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}