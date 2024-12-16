import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Serviços", href: "services" },
    { name: "Histórias de sucesso", href: "success-stories" },
    { name: "Contato", href: "contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Alessandri Comunica
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((item) => (
              <a
                key={item.href}
                href={`#${item.href.toLowerCase()}`}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((item) => (
              <a
                key={item.href}
                href={`#${item.href.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
