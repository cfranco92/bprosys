'use client';

import styled from 'styled-components';
import { CardProps, CardBodyProps } from '@/models';

const StyledCard = styled.div<{ $interactive?: boolean }>`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  height: 100%;
  
  ${props => props.$interactive && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const StyledCardBody = styled.div`
  padding: 1.25rem;
`;

export const Card = ({ 
  children, 
  interactive, 
  className = '',
  ...props 
}: CardProps & { interactive?: boolean }) => {
  return (
    <StyledCard 
      $interactive={interactive}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

const CardBody = ({ 
  children,
  className = '' 
}: CardBodyProps) => {
  return (
    <StyledCardBody className={className}>
      {children}
    </StyledCardBody>
  );
};

Card.Body = CardBody;

export default Card; 