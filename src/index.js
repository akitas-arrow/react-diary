import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import App from './App';
import {　createGlobalStyle } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const GlobalStyle = createGlobalStyle`
    body {
        
    }
`
