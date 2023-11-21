import Content from './component/Content';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import './style/Google.css';
import { useState } from 'react';

function App() {
 const[cred,setCred]=useState(false);
const[savecred,setSaveCred]=useState();

  return cred?(
  <Content savecred={savecred}/>
  ):( <div className="Google">
  <div className="Google-header">
  <div class="text"> Google Login </div>
  <GoogleLogin
  onSuccess={credentialResponse => {
  const decode=jwtDecode(credentialResponse.credential);
  console.log(decode);
  setSaveCred(decode)
  setCred(true);
}}
onError={() => {
console.log('Login Failed');
}}/></div>
</div>)
}

export default App;
