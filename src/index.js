import {ThemeProvider, createTheme} from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const theme = createTheme({
  dark: {
    color: "dark"
  },
  light: {
    color: "#999"
  }
})

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme = {theme}>
     <App />  
  </ThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

