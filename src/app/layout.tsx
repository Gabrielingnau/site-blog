import { Metadata } from "next";

import { Layout } from "@/components/layout";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-blog-bay.vercel.app"),
  title: {
    default: "SiteBlog",
    template: "%s | SiteBlog",
  },
  description: "Plataforma para afiliados venderem mais em um único lugar",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SiteBlog",
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
