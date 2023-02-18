import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#2a2a2a',
    white: '#ffffff',
    green: 'green',
    red: 'tomato',
    blue: 'blue',
  },
  borderRadii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
