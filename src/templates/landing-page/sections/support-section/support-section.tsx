import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import Image from "next/image";

export function SupportSection() {
  return (
    <section className="py-10 sm:py-20 relative">
      <Image
        alt="background"
        src="/assets/background-support.png"
        className="object-fit-cover -z-10"
        fill
        priority
      />
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-gray-100 md:text-xl text-md text-center max-w-lg font-sans">
            Sua loja de afiliados, simples, do jeito que deveria ser
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 md:mt-12 mt-8">
          <div className="w-auto p-6 flex flex-col items-start justify-center gap-4 bg-blue-400 rounded-xl">
            <div className="flex items-center justify-center rounded-lg p-2 bg-blue-300">
              <PaintbrushVertical className="h-5 w-5 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-100 text-sm font-sans">
                Personalize seu site
              </h3>
              <p className="text-gray-200 text-body-sm">
                Adicione sua logo, favicon, cores no seu catalago e tenha tudo
                com a sua cara.
              </p>
            </div>
          </div>

          <div className="w-auto p-6 flex flex-col items-start justify-center gap-4 bg-cyan-300 rounded-xl">
            <div className="flex items-center justify-center rounded-lg p-2 bg-cyan-200">
              <Store className="h-5 w-5 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-100 text-sm font-sans">
                Venda de qualquer loja
              </h3>
              <p className="text-gray-200 text-body-sm">
                Não importa a loja, o Site.Set permite que você insera qualquer
                link de afiliado.
              </p>
            </div>
          </div>

          <div className="w-auto p-6 flex flex-col items-start justify-center gap-4 bg-blue-400 rounded-xl">
            <div className="flex items-center justify-center rounded-lg p-2 bg-blue-300">
              <HeartHandshake className="h-5 w-5 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-100 text-sm font-sans">
                Receba suporte amigável
              </h3>
              <p className="text-gray-200 text-body-sm">
                Nossa equipe estará sempre pronta para te atender para ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
