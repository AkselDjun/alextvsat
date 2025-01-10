import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, label }: InputProps) => (
  <Container>
    <Label htmlFor={label ? label :name}>{label ? label :name}</Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default Input;
