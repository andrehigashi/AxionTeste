import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-family: var(--open-sans);
  font-weight: 600;
`;

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid #4A4A4A;
  height: 55px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 6rem 0 2rem;

  color: var(--gray500);
  font-family: var(--open-sans);
  font-size: 1.6rem;
`;

export const IconArea = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 2rem;
  color: var(--gray500);
`;
