'use client';

import styled from 'styled-components';
import { Button } from '@/common/styled-components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #0056b3 0%, #003580 100%);
  color: white;
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
`;

const StyledButton = styled(Button)`
  display: inline-flex;
`;

const ContactButton = styled(Button)`
  display: inline-flex;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
  }
`;

export const HeroSection = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <HeroTitle>
            Soluciones financieras para un futuro sin límites
          </HeroTitle>
          <HeroSubtitle>
            Descubre nuestros productos financieros diseñados para impulsar tus metas personales y empresariales con la tecnología más avanzada del mercado.
          </HeroSubtitle>
          <ButtonGroup>
            <StyledLink href="#productos">
              <StyledButton size="large">
                Ver productos
              </StyledButton>
            </StyledLink>
            <StyledLink href="#contacto">
              <ContactButton size="large">
                Contactar asesor
              </ContactButton>
            </StyledLink>
          </ButtonGroup>
        </HeroText>
        
        <HeroImage>
          <Image
            src="/images/hero-image.jpg"
            alt="Tecnología financiera de última generación"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-800 text-white">
              <div>Cargando...</div>
            </div>
          )}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-800 text-white text-center p-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Tecnología financiera de última generación</h2>
                <p className="text-xl">Impulsando el futuro de las finanzas</p>
              </div>
            </div>
          )}
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 