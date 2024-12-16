import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SuccessStories } from "./components/SuccessStories";
import { ContactInfo } from "./components/contact/ContactInfo";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <SuccessStories />
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                Entrar em contato
              </h2>
              <p className="mt-4 text-lg text-text">
                Pronto para transformar sua empresa? Estamos aqui para ajudar.
              </p>
            </div>
            <ContactInfo />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
