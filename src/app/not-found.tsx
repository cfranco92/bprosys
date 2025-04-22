'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';
import { Button } from '@/common/styled-components/Button';

const NotFoundContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 700;
  color: #0056b3;
  line-height: 1;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 1.5rem 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  display: inline-flex;
`;

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Página no encontrada</ErrorTitle>
        <ErrorMessage>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </ErrorMessage>
        <StyledLink href="/">
          <StyledButton size="large">
            Volver al inicio
          </StyledButton>
        </StyledLink>
      </NotFoundContainer>
      <Footer />
    </>
  );
} 