'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0056b3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.div`
  background-color: #0056b3;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`;

const MenuButton = styled.button`
  display: block;
  padding: 0.5rem;
  color: #495057;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.nav<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 2rem;
    padding: 0;
    box-shadow: none;
    align-items: center;
  }
`;

const NavLink = styled.span`
  padding: 0.75rem 0;
  color: #495057;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
  display: block;
  cursor: pointer;
  
  &:hover {
    color: #0056b3;
  }
  
  @media (min-width: 768px) {
    padding: 0;
    border-bottom: none;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavbarContent>
        <StyledLink href="/">
          <Logo aria-label="BProSys - Inicio">
            <LogoIcon>B</LogoIcon>
            BProSys
          </Logo>
        </StyledLink>
        
        <MenuButton 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                d="M6 18L18 6M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            )}
          </svg>
        </MenuButton>
        
        <NavLinks $isOpen={isMenuOpen}>
          <StyledLink href="/">
            <NavLink>Inicio</NavLink>
          </StyledLink>
          <StyledLink href="/#productos">
            <NavLink>Productos</NavLink>
          </StyledLink>
          <StyledLink href="/#nosotros">
            <NavLink>Nosotros</NavLink>
          </StyledLink>
          <StyledLink href="/#contacto">
            <NavLink>Contacto</NavLink>
          </StyledLink>
        </NavLinks>
      </NavbarContent>
    </HeaderContainer>
  );
};

export default Header; 