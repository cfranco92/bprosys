'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const FooterLink = styled.span`
  display: block;
  color: #495057;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    color: #0056b3;
  }
`;

const FooterDivider = styled.div`
  border-top: 1px solid #e9ecef;
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterCopyright = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #6c757d;
  
  &:hover {
    color: #0056b3;
  }
`;


const ContactSection = styled.div`
  max-width: 1280px;
  margin: 0 auto 2rem auto;
  padding: 2rem 1rem;
  background-color: #e9ecef;
  border-radius: 0.5rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #495057;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ContactData = styled.div`
  margin-top: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #495057;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div id="contacto">
        <ContactSection>
          <ContactInfo>
            <ContactTitle>¿Necesitas ayuda con nuestros productos?</ContactTitle>
            <ContactText>
              Nuestro equipo de asesores financieros está disponible para responder tus preguntas
              y ayudarte a encontrar la mejor solución para tus necesidades.
            </ContactText>
            <ContactData>
              <ContactItem>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>900 123 456</span>
              </ContactItem>
              <ContactItem>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contacto@bprosys.com</span>
              </ContactItem>
              <ContactItem>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Av. Principal 123, Ciudad Financiera</span>
              </ContactItem>
            </ContactData>
          </ContactInfo>
        </ContactSection>
      </div>
      
      <FooterContent>
        <FooterSection>
          <FooterTitle>BProSys</FooterTitle>
          <p className="text-sm text-gray-600 mb-4">
            Soluciones financieras innovadoras para tus necesidades personales y empresariales.
          </p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Productos</FooterTitle>
          <StyledLink href="/#cuentas">
            <FooterLink>Cuentas</FooterLink>
          </StyledLink>
          <StyledLink href="/#tarjetas">
            <FooterLink>Tarjetas</FooterLink>
          </StyledLink>
          <StyledLink href="/#fondos">
            <FooterLink>Fondos</FooterLink>
          </StyledLink>
          <StyledLink href="/#seguros">
            <FooterLink>Seguros</FooterLink>
          </StyledLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Empresa</FooterTitle>
          <StyledLink href="/about">
            <FooterLink>Nosotros</FooterLink>
          </StyledLink>
          <StyledLink href="/careers">
            <FooterLink>Trabaja con nosotros</FooterLink>
          </StyledLink>
          <StyledLink href="/blog">
            <FooterLink>Blog</FooterLink>
          </StyledLink>
          <StyledLink href="/contact">
            <FooterLink>Contacto</FooterLink>
          </StyledLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <StyledLink href="/privacy">
            <FooterLink>Política de privacidad</FooterLink>
          </StyledLink>
          <StyledLink href="/terms">
            <FooterLink>Términos y condiciones</FooterLink>
          </StyledLink>
          <StyledLink href="/cookies">
            <FooterLink>Política de cookies</FooterLink>
          </StyledLink>
        </FooterSection>
      </FooterContent>
      
      <FooterDivider />
      
      <FooterBottom>
        <FooterCopyright>
          © {new Date().getFullYear()} BProSys. Todos los derechos reservados.
        </FooterCopyright>
        
        <SocialLinks>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 