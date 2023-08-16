import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "@assets/styles/theme";

interface Props {
  type: "button" | "submit";
  variant: "participation" | "complete" | "start";
  size: "sm" | "lg";
  children: ReactNode;
  onClick?: () => {};
}

const Button = ({
  type,
  variant,
  size,
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <ButtonContainer type={type} size={size} variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{ size: string; variant: string }>`
  border: none;
  padding: ${({ size }) => (size === "lg" ? "8px 104px" : "5px 11px")};
  background-color: ${({ variant }) =>
    variant === "participation"
      ? "black"
      : variant === "complete"
      ? "#989491"
      : "#FF9704"};
  font-weight: 700;
  font-size: ${({ size }) => (size === "sm" ? "12px" : "20px")};
  border-radius: ${({ size }) => (size === "sm" ? "12px" : "32px")};
  color: #fff;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.4) inset;
  }

  &:active {
    box-shadow: none;
    background-color: #ff9704;
  }
`;
