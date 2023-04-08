import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"
import { Viewport } from './components/Viewport';
import { Provider } from 'react-redux';
import { store } from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <>
<Provider store={store}>
  <Viewport/>
  </Provider>
  </>
)
