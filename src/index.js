import {ThemeProvider, createTheme} from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider} from "react-redux";
import { ProfileStore} from './components'

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
  <Provider store={ProfileStore}>
  <ThemeProvider theme = {theme}>
     <App />  
  </ThemeProvider>  
  </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

