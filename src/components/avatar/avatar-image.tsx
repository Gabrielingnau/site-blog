import Image, { ImageProps } from "next/image";

export function AvatarImage({ ...rest }: ImageProps) {
  return (
    <div className="relative border border-blue-300 rounded-full">
      <Image {...rest} className="object-cover object-center" />
    </div>
  );
}
