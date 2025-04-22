'use client';

import styled from 'styled-components';
import { InfoRowProps } from '@/models';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.dt`
  color: #6b7280;
  font-weight: 500;
`;

const Value = styled.dd`
  color: #1f2937;
`;

export const InfoRow = ({ 
  label, 
  value,
  className = ''
}: InfoRowProps) => {
  return (
    <Row className={className}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Row>
  );
};

export default InfoRow; 