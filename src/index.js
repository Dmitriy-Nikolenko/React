import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppHooks } from './app-hooks';
// import { AppClass } from './AppClass';

ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

