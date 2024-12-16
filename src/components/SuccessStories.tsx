import { Instagram } from "lucide-react";

const stories = [
  {
    company: "@patycentena",
    industry: "Maquiagem e autoestima",
    challenge:
      "Se posicionar digitalmente, criar um tom de voz encantador e ser referência na sua cidade.",
    solution:
      "Constância de postagens com autênticidade, adoção de uma identidade visual e uso de materiais audiovisuais de qualidade.",
    results: `Adoção do "Paty aqui" em toda a serra gaúcha, mais de 7.000 seguidoras fiéis engajadas. Paty se tornou mentora de cursos e influenciadora digital (nem preciso dizer que a agenda dela é cheia, né?).`,
    image: "/AlessandriComunicaSite/assets/img/paty-centena.png",
  },
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossas histórias de sucesso
          </h2>
        </div>

        <div className="mt-20 space-y-16">
          {stories.map((story, index) => (
            <div
              key={story.company}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={story.image}
                  alt={story.company}
                  className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-96"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-2">
                  <Instagram className="text-primary" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {story.company}
                  </h3>
                </div>
                <p className="text-sm text-primary font-semibold">
                  {story.industry}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary">Desafio:</h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Solução:</h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Resultado:</h4>
                    <p className="text-gray-600">{story.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
