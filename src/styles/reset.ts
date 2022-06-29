import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray500: #9B9B9B;
    --gray700: #4A4A4A;
    --orange800: #DC4E1B;
    --white900: #FFFFFF;
    --white800: #F9F9F9;

    --open-sans: 'Open Sans', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: sans-serif;
    font-size: 14px;
  }

  body,
  input,
  textarea,
  button {
    font-family: var(--open-sans);
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: unset;
    -webkit-box-shadow: 0 0 0px 0px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
