import { Mail, Phone, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary">
          Informações de contato
        </h3>
        <p className="text-text flex gap-2 items-center">
          Fale com a gente, vamos adorar bater um papo
          <svg
            className="w-[20px] h-[20px]"
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
        </p>
      </div>

      {/* Phone Contact */}
      <div className="flex items-start space-x-4">
        <Phone className="text-primary mt-1" size={20} />
        <div>
          <h4 className="font-medium text-gray-900">WhatsApp</h4>
          <a
            href="https://wa.me/555131916215"
            className="text-primary hover:text-primary-hover"
            target="_blank"
          >
            (51) 3191-6215
          </a>
          <p className="text-sm text-text mt-1">
            Tire suas dúvidas e contrate online
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Email Contact */}
        <div className="flex items-start space-x-4">
          <Mail className="text-primary mt-1" size={20} />
          <div>
            <h4 className="font-medium text-gray-900">E-mail</h4>
            <a
              href="mailto:oi@alessandricomunica.com"
              className="text-primary hover:text-primary-hover"
            >
              oi@alessandricomunica.com
            </a>
            <p className="text-sm text-text mt-1">
              Preferencialmente para consultas e propostas detalhadas
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4">
          <Clock className="text-primary mt-1" size={20} />
          <div>
            <h4 className="font-medium text-gray-900">
              Horário de atendimento
            </h4>
            <div className="text-text">
              <p>Segunda - Sexta: 10:00 às 17:00</p>
              <p>Sábado: 10:00 às 14:00</p>
              <p>Domingo: Descansar né :)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm text-text">
          <p className="font-medium text-gray-900 mb-2">
            Expectativas de tempo de resposta:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>E-mail: Até 2 horas</li>
            <li>WhatsApp: Em até 1 hora em horário comercial</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
