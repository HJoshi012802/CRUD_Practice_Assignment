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
<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/createvendor/:clientId' element={<Createvendor/>}/>
  <Route path='/updatevendor/:id' element={<Updatedvendor/>}/>
  </Routes>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

