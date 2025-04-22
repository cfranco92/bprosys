'use client';

import { forwardRef } from 'react';
import styled from 'styled-components';
import { ButtonProps } from '@/models';

const StyledButton = styled.button<{ 
  $variant: string; 
  $size: string; 
  $fullWidth: boolean 
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s;
  white-space: nowrap;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
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
      default:
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
    }
  }}
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: #0056b3;
          color: white;
          
          &:hover:not(:disabled) {
            background-color: #004494;
          }
          
          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.4), 0 0 0 1px #0056b3;
          }
          
          &:disabled {
            background-color: #a3c4e7;
            cursor: not-allowed;
            opacity: 0.7;
          }
        `;
      case 'secondary':
        return `
          background-color: #e5e7eb;
          color: #1f2937;
          
          &:hover:not(:disabled) {
            background-color: #d1d5db;
          }
          
          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.4), 0 0 0 1px #9ca3af;
          }
          
          &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #0056b3;
          border: 1px solid #0056b3;
          
          &:hover:not(:disabled) {
            background-color: rgba(0, 86, 179, 0.04);
          }
          
          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.4), 0 0 0 1px #0056b3;
          }
          
          &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `;
      case 'white-outline':
        return `
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          border: 2px solid white;
          
          &:hover:not(:disabled) {
            background-color: rgba(255, 255, 255, 0.25);
          }
          
          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4), 0 0 0 1px white;
          }
          
          &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `;
      default:
        return '';
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