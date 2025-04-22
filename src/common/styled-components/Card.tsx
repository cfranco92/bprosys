"use client";

import styled from "styled-components";
import { CardProps, CardBodyProps } from "@/types";

const StyledCard = styled.div<{ $interactive?: boolean }>`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.2s ease;
  height: 100%;

  ${(props) =>
    props.$interactive &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  `}
`;

const StyledCardBody = styled.div`
  padding: 1.25rem;
`;

export const Card = ({
  children,
  interactive,
  className = "",
  ...props
}: CardProps & { interactive?: boolean }) => {
  return (
    <StyledCard $interactive={interactive} className={className} {...props}>
      {children}
    </StyledCard>
  );
};

const CardBody = ({ children, className = "" }: CardBodyProps) => {
  return <StyledCardBody className={className}>{children}</StyledCardBody>;
};

Card.Body = CardBody;

export default Card;
