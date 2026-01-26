import Image from "next/image";
import Link from "next/link";

export function Logo({ ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest}>
      <Link href={"/"}>
        <Image width={116} height={32} src={"/desktop-logo.png"} alt="Logo" />
      </Link>
    </div>
  );
}
