import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeutschAussprache | Pronúncia Alemã",
  description:
    "Treine a pronúncia alemã com exercícios interativos, reconhecimento de voz e pontuação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
