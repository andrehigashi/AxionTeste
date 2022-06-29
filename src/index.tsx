import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/reset'

import { Login, FundoLogin } from './pages/Login'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <FundoLogin />
    <Login />
  </React.StrictMode>
);
