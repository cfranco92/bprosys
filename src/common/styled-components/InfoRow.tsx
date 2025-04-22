"use client";

import React from "react";
import styled from "styled-components";
import { InfoRowProps } from "@/types";

const Container = styled.div`
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
  margin-left: 0;
  text-align: right;
`;

export const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

export default InfoRow;
