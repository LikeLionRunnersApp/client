import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "@assets/styles/theme";

interface Props {
  type: "button" | "submit";
  variant: "participation" | "complete" | "start" | "login" | "socialLogin";
  color?: string;
  size: "sm" | "lg";
  children: ReactNode;
  onClick?: () => {};
}

const Button = ({
  type,
  variant,
  size,
  color,
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <ButtonContainer type={type} size={size} variant={variant} color={color}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{
  size: string;
  variant: string;
  color?: string;
}>`
  border: none;
  width: ${({ size }) => (size === "lg" ? "100%" : "62px")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => (size === "lg" ? "40px" : "24px")};
  background-color: ${({ variant }) =>
    variant === "participation"
      ? "black"
      : variant === "complete"
      ? "#989491"
      : variant === "login"
      ? "#D9D9D9"
      : variant === "socialLogin"
      ? "#F9E200"
      : "#FF9704"};
  font-weight: 700;
  font-size: ${({ size }) => (size === "sm" ? "12px" : "20px")};
  border-radius: ${({ size }) => (size === "sm" ? "12px" : "32px")};
  color: ${({ color }) => (color ? color : "#fff")};
  cursor: pointer;
  transition: all 0.15s ease-out;

  & img {
    margin-right: 12px;
  }

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.4) inset;
  }

  &:active {
    box-shadow: none;
    background-color: ${({ variant }) =>
      variant === "socialLogin" ? undefined : "#ff9704"};
  }
`;
