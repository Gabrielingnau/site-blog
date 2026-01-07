import { Store } from "lucide-react";
import Image from "next/image";

import { StoreFree } from "../../../../components/store-free";

export function CallToACtion() {
  return (
    <section className="relative py-10 sm:py-20 mt-7 sm:mt-8">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="flex items-center justify-center">
          <div className="max-w-md h-full flex flex-col items-center justify-between">
            <div className="absolute -top-7 sm:-top-8 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-cyan-300/60 flex items-center justify-center">
              <Store className="text-cyan-100 w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-gray-100 text-md md:text-xl text-center font-sans">
                Crie uma loja online e inicie suas vendas ainda hoje
              </h2>

              <div>
                <StoreFree />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="background"
        src="/assets/background-call-to-action.png"
        className="object-fit-cover -z-10"
        fill
        priority
      />
    </section>
  );
}
