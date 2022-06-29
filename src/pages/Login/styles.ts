import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  /* margin: auto; */
  position: relative;
  display: flex;
  justify-content: left;
  align-items: left;
  padding-left: 12.5%;
  padding-top: 4.79%;
  position: absolute;
  top: 0;
`;
export const Logo = styled.div`
img{max-width:50%; width:50%}
width: 350px;
height: 45px;
`

export const Fundo = styled.div`
img{max-width:100%; width:100%}
position: relative;
right: 0;

`
export const Container1 = styled.div`
 width: 100%;
 display: flex;
 align-items: right;
 justify-content: right;
 background-color: var(--white800);
 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--white900);
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  width: 430px;
  padding: 5rem 4rem;
  margin-top: 5rem;
`;

export const Label = styled.label`
  color: var(--gray700);
  font-family: var(--open-sans);
  font-weight: 300;
  font-size: 1.6rem;
  letter-spacing: 1px;
  line-height: 19px;
  width: 100%;
  text-align: center;
`
export const Label2 = styled.label`
  color: var(--gray500);
  font-family: var(--open-sans);
  font-size: 1.4rem;
  letter-spacing: 1px;
  line-height: 17px;
  text-align: left;
`



