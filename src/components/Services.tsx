import { Calendar, Camera, Instagram, MoreHorizontal } from "lucide-react";

const services = [
  {
    title: "Planejamento estratégico para redes sociais",
    description:
      "Calendários de conteúdos para você nunca mais não saber o que postar.",
    icon: Calendar,
  },
  {
    title: "Análise de perfil do Instagram",
    description:
      "Deixe seu perfil otmizado para vender. Bonito e organizado também ;)",
    icon: Instagram,
  },
  {
    title: "Ensaio fotográfico profissional",
    description:
      "Porque todo perfil merece uma fotinho profissional e bem apresentável, né?",
    icon: Camera,
  },
  {
    title: "E mais...",
    // description: 'Criação de cards/criativos e copys (legendas), roteiros e edição para Reels, captação em eventos, criação de sites e o que mais o nosso coração mandar.',
    description: (
      <>
        <p>
          Criação de cards/criativos e copys (legendas), roteiros e edição para
          Reels, captação em eventos, criação de sites e o que mais o nosso
          coração mandar.
        </p>
        <p className="mt-1">
          <a
            href="https://www.canva.com/design/DAGZOe18-Yo/9ZciPo12Z4GLSt1-pqlcSg/view?utm_content=DAGZOe18-Yo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h62147a01e4"
            className="text-primary hover:text-secondary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Proposta comercial aqui
          </a>
        </p>
      </>
    ),
    icon: MoreHorizontal,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            O que podemos fazer por você
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-primary/10 text-primary ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
