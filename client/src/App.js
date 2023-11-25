import Content from './component/Content';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import './style/Google.css';
import { useState } from 'react';

function App() {
 const[cred,setCred]=useState(false);
const[decode,setDecode]=useState();
const[clientId,setclientId]=useState();

  return cred?(
  <Content savecred={decode} clientId={clientId} setCred={setCred}/>
  ):( <div className="Google">
  <div className="Google-header">
  <div className="text"> Google Login </div>
  <GoogleLogin
  onSuccess={credentialResponse => {
  const decode=jwtDecode(credentialResponse.credential);
  console.log(credentialResponse.credential)
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
