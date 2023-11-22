import Content from './component/Content';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import './style/Google.css';
import { useState } from 'react';

function App() {
 const[cred,setCred]=useState(false);
const[vdecode,setDecode]=useState();
const[clientId,setclientId]=useState();

  return cred?(
  <Content savecred={vdecode} clientId={clientId}/>
  ):( <div className="Google">
  <div className="Google-header">
  <div className="text"> Google Login </div>
  <GoogleLogin
  onSuccess={credentialResponse => {
  const decode=jwtDecode(credentialResponse.credential);
  setclientId(decode.email);
  setDecode(decode);
  setCred(true);
}}
onError={() => {
console.log('Login Failed');
}}/></div>
</div>)
}

export default App;
