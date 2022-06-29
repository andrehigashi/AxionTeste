import { ReactNode } from "react";
import { Container, Label, InputContainer, Input as StyledInput, IconArea } from './styles';

interface IInputProps {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  icon?: ReactNode;
  onChange?: (value: string) => void;
}

export function Input(props: IInputProps) {
  return (
    <Container>
      <Label htmlFor={props.label}>{props.label}</Label>

      <InputContainer>
        <StyledInput
          id={props.label}
          type={props.type || "text"}
          placeholder={props.placeholder}
          onChange={(event) => {
            if (props.onChange) {
              props.onChange(event.target.value)
            }
          }}
        />
        <IconArea>{props.icon}</IconArea>
      </InputContainer>
    </Container>
  )
}
