import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="w-full py-8 flex md:flex-row justify-between p-2">
          <Link href={"/"}>
            <Image
              width={110}
              height={32}
              src={"/assets/Logo.png"}
              alt="Logo"
            />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm text-muted-foreground">
            <Link href="termos-de-uso" className="text-blue-400/80 hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="politica-de-privacidade" className="text-blue-400/80 hover:text-primary">
              Politica de privacidade
            </Link>
            <Link href="feedback" className="text-blue-400/80 hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
