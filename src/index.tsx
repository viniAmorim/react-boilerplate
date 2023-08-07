import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from '~/themes/theme.json';
import { AuthProvider } from '~/layouts/contexts';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '~/layouts/i18n';
import { GlobalStyle } from '~/layouts/styles/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <GlobalStyle />
          <App />
        </I18nextProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
