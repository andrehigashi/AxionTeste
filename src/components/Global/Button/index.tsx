import { Container, Button, Label, Label2, Button2 } from "./styles"

interface Ibutton{
    label:string;
}
interface Ibutton2{
    label:string;
}
export function Button1 (props:Ibutton){
   return(
    <Container >
    <Button>
        <Label>{props.label}</Label>
        </Button>
    </Container>
    
   )
}
   export function Button3 (props:Ibutton2){
    return(
     <Container >
     <Button2>
         <Label2>{props.label}</Label2>
         </Button2>
     </Container>
    )

}