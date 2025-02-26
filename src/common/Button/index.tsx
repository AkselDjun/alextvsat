import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, style }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} style={style}>
    {children}
  </StyledButton>
);
