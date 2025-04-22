'use client';

import styled from 'styled-components';
import { forwardRef } from 'react';
import { ButtonProps } from '@/models';

const StyledButton = styled.button<{
  $variant: string;
  $size: string;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  width: ${props => (props.$fullWidth ? '100%' : 'auto')};
  
  ${props => {
    switch (props.$size) {
      case 'small':
        return `
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      default: // medium
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
    }
  }}
  
  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: #e5e7eb;
          color: #1f2937;
          border: none;
          
          &:hover {
            background-color: #d1d5db;
          }
          
          &:focus {
            box-shadow: 0 0 0 3px rgba(209, 213, 219, 0.5);
            outline: none;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #0056b3;
          border: 1px solid #0056b3;
          
          &:hover {
            background-color: rgba(0, 86, 179, 0.04);
          }
          
          &:focus {
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
            outline: none;
          }
        `;
      default: // primary
        return `
          background-color: #0056b3;
          color: white;
          border: none;
          
          &:hover {
            background-color: #004494;
          }
          
          &:focus {
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.4);
            outline: none;
          }
          
          &:disabled {
            background-color: #a3c4e7;
            cursor: not-allowed;
          }
        `;
    }
  }}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  return (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button; 