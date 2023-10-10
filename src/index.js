import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  console.log(window.location.pathname);
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
}

console.log(process.env.REACT_APP_AUTH0_DOMAIN)
console.log(process.env.REACT_APP_AUTH0_CLIENT_ID)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      // {...providerConfig}
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: 'http://localhost:3006/pos-system-admin/',
        audience: "http://localhost:3006/pos-system-admin/",
        clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET
        // scope: "read:current_user update:current_user_metadata"
      }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
