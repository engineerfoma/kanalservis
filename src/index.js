import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import './vendor/fonts/fonts.css'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sant-serif;
}
`
const theme = {
  media: {
    phone: "(max-width: 560px)",
    tablet: "(max-width: 768px) and (min-width: 560px)",

  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);