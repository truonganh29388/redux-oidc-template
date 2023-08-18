import store from 'app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { loadUser, OidcProvider } from 'redux-oidc';
import userManager from 'utils/userManager';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
loadUser(store ,userManager);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <OidcProvider userManager={userManager} store={store}>
        <App />
      </OidcProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
