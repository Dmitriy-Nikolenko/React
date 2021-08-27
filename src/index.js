import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import { BrowserRouter} from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';
import { store, persistore } from './components';


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
