import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<GoogleOAuthProvider clientId="880668664835-44i8nghecg799pftngho3uer6j24o7dk.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);

