import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import Createvendor from "./component/Createvendor";
import Updatedvendor from './component/Updatevendor';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="880668664835-44i8nghecg799pftngho3uer6j24o7dk.apps.googleusercontent.com">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/createvendor/:clientId' element={<Createvendor/>}/>
  <Route path='/updatevendor/:id' element={<Updatedvendor/>}/>
  </Routes>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

