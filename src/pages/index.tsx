import { Inter, PT_Sans_Caption } from "next/font/google";

import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

const PTSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.className} ${PTSansCaption.className} grid-rows-[20px, 1fr, 20px] items-center justify-items-center min-h-screen`}
    ></div>
  );
}
