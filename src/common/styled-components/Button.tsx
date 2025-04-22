'use client';

import styled from 'styled-components';
import { ReactNode, ButtonHTMLAttributes, ElementType } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  as?: ElementType;
}


const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  text-decoration: none;

  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: #0056b3;
          color: white;
          border: none;
          &:hover {
            background-color: #004494;
          }
          &:focus {
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.4);
          }
        `;
      case 'secondary':
        return `
          background-color: #e9ecef;
          color: #343a40;
          border: none;
          &:hover {
            background-color: #dee2e6;
          }
          &:focus {
            box-shadow: 0 0 0 3px rgba(233, 236, 239, 0.4);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #0056b3;
          border: 2px solid #0056b3;
          &:hover {
            background-color: rgba(0, 86, 179, 0.05);
          }
          &:focus {
            box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.3);
          }
        `;
      default:
        return '';
    }
  }}

  
  ${props => {
    switch (props.$size) {
      case 'small':
        return `
          font-size: 0.875rem;
          padding: 0.5rem 0.75rem;
        `;
      case 'medium':
        return `
          font-size: 1rem;
          padding: 0.75rem 1.25rem;
        `;
      case 'large':
        return `
          font-size: 1.125rem;
          padding: 1rem 1.5rem;
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  fullWidth = false,
  as,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      as={as}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 