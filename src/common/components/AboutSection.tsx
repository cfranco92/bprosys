'use client';

import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 1rem;
  background-color: #f8f9fa;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutImage = styled.div`
  position: relative;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #0056b3 0%, #003580 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const OfficeImageText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #212529;
`;

const AboutParagraph = styled.p`
  font-size: 1.125rem;
  color: #495057;
  line-height: 1.7;
`;

const AboutValues = styled.div`
  margin-top: 4rem;
`;

const ValuesTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #212529;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #0056b3;
  font-size: 1.5rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.6;
`;

export const AboutSection = () => {
  return (
    <AboutContainer id="nosotros">
      <AboutContent>
        <SectionHeader>
          <SectionTitle>Sobre Nosotros</SectionTitle>
          <SectionDescription>
            Somos una empresa financiera comprometida con la innovación y la excelencia en el servicio a nuestros clientes.
          </SectionDescription>
        </SectionHeader>
        
        <AboutGrid>
          <AboutImage>
            <OfficeImageText>
              Oficina Central de BProSys
            </OfficeImageText>
          </AboutImage>
          
          <AboutText>
            <AboutTitle>Nuestra Misión</AboutTitle>
            <AboutParagraph>
              En BProSys, nos dedicamos a proporcionar soluciones financieras innovadoras que 
              ayuden a nuestros clientes a alcanzar sus metas personales y empresariales. 
              Combinamos tecnología de vanguardia con un servicio personalizado para ofrecer 
              la mejor experiencia bancaria.
            </AboutParagraph>
            
            <AboutTitle>Nuestra Visión</AboutTitle>
            <AboutParagraph>
              Aspiramos a ser líderes en el sector financiero, reconocidos por nuestra 
              innovación constante, compromiso con la sostenibilidad y la creación de valor 
              para nuestros clientes, empleados y accionistas.
            </AboutParagraph>
          </AboutText>
        </AboutGrid>
        
        <AboutValues>
          <ValuesTitle>Nuestros Valores</ValuesTitle>
          
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 4.215L18.944 19H5.056L12 6.215z"/>
                  <path d="M12 16a1 1 0 100-2 1 1 0 000 2zm0-6a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Innovación</ValueTitle>
              <ValueDescription>
                Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios, 
                aplicando tecnología de vanguardia para simplificar la experiencia financiera.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Transparencia</ValueTitle>
              <ValueDescription>
                Establecemos relaciones basadas en la honestidad y la claridad, 
                proporcionando información completa sobre nuestros productos, tasas y condiciones.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Accesibilidad</ValueTitle>
              <ValueDescription>
                Nos esforzamos por hacer que los servicios financieros sean accesibles para todos, 
                eliminando barreras y simplificando procesos para una mejor inclusión financiera.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </AboutValues>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection; 