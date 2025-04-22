"use client";

import Section from "@/common/styled-components/Section";

export const AboutSection = () => {
  return (
    <Section
      id="nosotros"
      title="Sobre Nosotros"
      description="Somos una empresa financiera comprometida con la innovación y la excelencia en el servicio a nuestros clientes."
      className="bg-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0056b3] to-[#003580] flex items-center justify-center text-white">
          <div className="text-2xl text-center p-8">
            Oficina Central de BProSys
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              En BProSys, nos dedicamos a proporcionar soluciones financieras
              innovadoras que ayuden a nuestros clientes a alcanzar sus metas
              personales y empresariales. Combinamos tecnología de vanguardia
              con un servicio personalizado para ofrecer la mejor experiencia
              bancaria.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nuestra Visión
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aspiramos a ser líderes en el sector financiero, reconocidos por
              nuestra innovación constante, compromiso con la sostenibilidad y
              la creación de valor para nuestros clientes, empleados y
              accionistas.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Nuestros Valores
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-6 text-blue-700">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 21h22L12 2zm0 4.215L18.944 19H5.056L12 6.215z" />
                <path d="M12 16a1 1 0 100-2 1 1 0 000 2zm0-6a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Innovación
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Buscamos constantemente nuevas formas de mejorar nuestros
              productos y servicios, aplicando tecnología de vanguardia para
              simplificar la experiencia financiera.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-6 text-blue-700">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Transparencia
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Establecemos relaciones basadas en la honestidad y la claridad,
              proporcionando información completa sobre nuestros productos,
              tasas y condiciones.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-6 text-blue-700">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Accesibilidad
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Nos esforzamos por hacer que los servicios financieros sean
              accesibles para todos, eliminando barreras y simplificando
              procesos para una mejor inclusión financiera.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
