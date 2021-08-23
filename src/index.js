import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom"
import { App } from './App';
import { Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistore } from './components';
import "./global.css";

ReactDOM.render(
  <>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistore}>
      <BrowserRouter>        
        <App />        
      </BrowserRouter>
     </PersistGate>      
    </Provider>
  </>,
  document.getElementById("root"),
)
