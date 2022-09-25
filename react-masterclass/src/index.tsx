import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111"
};

const whiteTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke"
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);