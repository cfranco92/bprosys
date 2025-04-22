"use client";

import React from "react";
import styled from "styled-components";
import { BadgeProps } from "@/types/component-props";

const StyledBadge = styled.span<{ $variant: string; $rounded: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  ${(props) =>
    props.$rounded ? "border-radius: 9999px;" : "border-radius: 0.25rem;"}

  ${(props) => {
    switch (props.$variant) {
      case "success":
        return `
          background-color: #dcfce7;
          color: #166534;
        `;
      case "warning":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `;
      case "danger":
        return `
          background-color: #fee2e2;
          color: #b91c1c;
        `;
      case "info":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `;
      default:
        return `
          background-color: #f3f4f6;
          color: #1f2937;
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  rounded = false,
  className = "",
}) => {
  return (
    <StyledBadge $variant={variant} $rounded={rounded} className={className}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
