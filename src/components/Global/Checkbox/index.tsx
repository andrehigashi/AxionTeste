
import {Container,Label } from "./styles"

interface Icheckbox{
    label:string;
}
export function Checkbox (props:Icheckbox){
  return (
    <Container>
      <input type="checkbox" />
      <Label>
      {props.label}
      </Label>
    </Container>
  );
};