'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const SectionContainer = styled.section`
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const SectionContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.625;
`;

export const Section = ({
  id,
  title,
  description,
  children,
  className = ''
}: SectionProps) => {
  return (
    <SectionContainer id={id} className={className}>
      <SectionContent>
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          {description && (
            <SectionDescription>{description}</SectionDescription>
          )}
        </SectionHeader>
        
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section; 