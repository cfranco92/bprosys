'use client';

import styled from 'styled-components';
import { BadgeProps } from '@/models';

const StyledBadge = styled.span<{ $variant: string; $rounded: boolean }>`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.$rounded ? '9999px' : '0.25rem'};
  
  ${props => {
    switch (props.$variant) {
      case 'success':
        return `
          background-color: #d1fae5;
          color: #065f46;
        `;
      case 'warning':
        return `
          background-color: #fef3c7;
          color: #92400e;
        `;
      case 'danger':
        return `
          background-color: #fee2e2;
          color: #b91c1c;
        `;
      case 'info':
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

export const Badge = ({ 
  children, 
  variant = 'default', 
  rounded = false,
  className = ''
}: BadgeProps) => {
  return (
    <StyledBadge
      $variant={variant}
      $rounded={rounded}
      className={className}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge; 