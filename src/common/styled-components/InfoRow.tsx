'use client';

import styled from 'styled-components';
import { InfoRowProps } from '@/models';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Label = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const Value = styled.div`
  color: #1f2937;
  font-weight: 500;
  text-align: right;
`;

export const InfoRow = ({ label, value, className = '' }: InfoRowProps) => {
  return (
    <Row className={className}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Row>
  );
};

export default InfoRow; 