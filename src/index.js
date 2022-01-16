import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';

//Inicializar microsoft Graph Toolkit con el proveedor MSAL
Providers.globalProvider = new Msal2Provider({
  clientId: '1c8ca553-f56e-4052-addd-d2d68493bd9f'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);