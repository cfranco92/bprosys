'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

const StyledCard = styled.div<{ $interactive: boolean }>`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  height: 100%;

  ${props => props.$interactive && `
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.07), 0 4px 6px rgba(0, 0, 0, 0.05);
    }
  `}
`;

const CardHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardFooter = styled.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid #e9ecef;
`;

export const Card = ({ 
  children, 
  className, 
  onClick, 
  interactive = false 
}: CardProps) => {
  return (
    <StyledCard 
      className={className} 
      onClick={onClick} 
      $interactive={interactive || !!onClick}
    >
      {children}
    </StyledCard>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card; 