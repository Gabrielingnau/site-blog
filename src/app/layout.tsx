import { Metadata } from "next";

import { Layout } from "@/components/layout";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-blog-bay.vercel.app"),

  title: {
    default: "SiteBlog — Plataforma para afiliados venderem mais online",
    template: "%s | SiteBlog",
  },

  description:
    "Organize seus links, crie páginas de venda e aumente suas comissões como afiliado em um único lugar simples, rápido e profissional.",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SiteBlog",
    title: "SiteBlog — Plataforma para afiliados venderem mais online",
    description:
      "Crie páginas de venda, concentre seus links e maximize suas conversões como afiliado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SiteBlog - Plataforma para afiliados",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SiteBlog — Plataforma para afiliados",
    description:
      "Ferramentas simples para afiliados venderem mais todos os dias.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
