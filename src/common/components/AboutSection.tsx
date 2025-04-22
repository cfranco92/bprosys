"use client";

import Section from "@/common/styled-components/Section";
import Image from "next/image";

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
              <Image
                src="/svgs/innovation.svg"
                alt="Icono de Innovación"
                width={32}
                height={32}
              />
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
              <Image
                src="/svgs/transparency.svg"
                alt="Icono de Transparencia"
                width={32}
                height={32}
              />
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
              <Image
                src="/svgs/accessibility.svg"
                alt="Icono de Accesibilidad"
                width={32}
                height={32}
              />
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
