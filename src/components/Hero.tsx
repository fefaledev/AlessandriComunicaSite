import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="flex gap-2 items-center text-primary">
                    Marketing com
                    <svg
                      className="w-[50px] h-[50px]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                      role="img"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M61.1 18.2c-6.4-17-27.2-9.4-29.1-.9c-2.6-9-22.9-15.7-29.1.9C-4 36.7 29.6 53.3 32 56c2.4-2.2 36-19.6 29.1-37.8"
                        fill="#482975"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="mt-3 text-xl text-secondary sm:mt-5 sm:max-w-xl md:mt-5">
                  Uma agência completa. Comunicação, imagem e estratégia
                </p>
                <p className="bg-yellow-200 px-1 rounded w-fit mt-3 font-bold text-base text-text sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  Transforme sua essência em resultados!
                </p>
                <p className="mt-3 text-xl text-secondary sm:mt-5 sm:max-w-xl md:mt-5">
                  Gestão de redes sociais simplificada e eficaz para você e sua
                  marca/negócio/empresa ganharem escala no digital. Conheça
                  nossos planos flexíveis.
                </p>
                <div className="mt-5 sm:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover md:py-4 md:text-lg md:px-10"
                    >
                      Vamos começar
                      <ArrowRight className="ml-2" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-[400px] h-[400px]">
                  <img
                    src="/assets/img/alessandri-comunica.png"
                    alt="Marketing team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
