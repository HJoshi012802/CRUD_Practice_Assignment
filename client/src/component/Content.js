import {useState,useEffect} from "react";
import "../style/Content.css";
import axios from 'axios';
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Content({clientId,savecred}){
  const[vendor,setVendor]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/allVendors").then((res)=>{
      //console.log(res.data.allVendors);
      setVendor(res.data.allVendors);
      
     }).catch((error)=>{
      console.log(error);
     })
     //console.log(savecred);
    },[vendor])

    return(
        <div className="Nav">
          <nav>
            <h1 className="title">JS TIGERS</h1>
            <div className="button-container">
              <button className="nav-button"><Link style={{color:"black",textDecoration:"none"}}  to={`/createvendor/${clientId}`}>Create Vendor</Link></button>
              <button  className="nav-button"><Link style={{color:"black",textDecoration:"none"}} to='/Login'>Log Out</Link></button>
              <img className="google-image" src={savecred.picture} alt="google user" style={{width:"60px", height:"60px",borderBlockColor:"antiquewhite", borderRadius:"50px", marginLeft:"30px", marginRight:"20px"}}></img>
            </div>
          </nav>
      <div className="container">
      {
        vendor.map((v, index)=>(<Card vendor={v} key={index} clientId={clientId}/>))
      }
      </div>
    </div>
    )
}