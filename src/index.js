import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayerProvider from './context/MusicPlayerProvider';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';
import GlobalStyle from './assets/styles/global';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MusicPlayerProvider>
      <GlobalStyle />
      <ThemeProvider theme={ defaultTheme }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MusicPlayerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
