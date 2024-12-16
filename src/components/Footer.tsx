import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const links = [
    { name: "Serviços", href: "services" },
    { name: "Histórias de sucesso", href: "success-stories" },
    { name: "Contato", href: "contact" },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">
              Alessandri Comunica
            </span>
            <p className="mt-4 text-gray-400">
              Transform your essence into results through innovative marketing
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-4">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href.toLowerCase()}`}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Nos siga
            </h3>
            <div className="mt-4 flex space-x-6">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Alessandri Comunica. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
