import {Input} from '../../components/Global/Input';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Container, Form, Label, Label2, Fundo, Container1, Logo } from './styles'
import { Checkbox } from '../../components/Global/Checkbox';
import { Button1, Button3 } from '../../components/Global/Button';
import bg from '../../assets/assets/bg.jpg';
import logo from '../../assets/assets/logo.png';








export function Login() {
  const handleChangeEmail = (value: string) => {
    console.log(value);
  }

  const handleChangePassword = (value: string) => {
    console.log(value)
  }

  return (
    <Container>
      <Form>
        <Logo>
      <img src={logo}></img>
        </Logo>
        <Input label='Email' placeholder='Digite seu email' icon={<AiOutlineMail size={20} />} onChange={handleChangeEmail} />
        <Input label='Password' placeholder='Digite sua senha' type='password' icon={<AiOutlineLock size={20} />} onChange={handleChangePassword} />
        <Checkbox label='Mostrar a Senha.'></Checkbox>
        <p>
          Problemas para acessar sua conta?
        </p>
        <Button1 label='Acessar'></Button1>
        <Label>ou</Label>
        <Button3 label='Cadastrar'></Button3>
        <Label2>Termos de uso • Política de privacidade</Label2>
      </Form>
    </Container>
  )
}
export function FundoLogin(){
return (
  <Container1>
  <div >
    
  <Fundo>
    <img src={bg}></img>
  </Fundo>
  </div>
  </Container1>
  
)
};
