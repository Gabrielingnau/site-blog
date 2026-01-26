import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image
          width={116}
          height={32}
          src={"/desktop-logo.png"}
          alt="Logo"
          className="sm:block hidden"
        />
        <Image
          alt="Icone da logo"
          src="/logo.png"
          width={40}
          height={40}
          className="block sm:hidden"
        />
      </Link>
    </div>
  );
}
