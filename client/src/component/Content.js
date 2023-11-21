import {useState,useEffect} from "react";
import "../style/Content.css";
import axios from 'axios';
import Card from "./Card";

export default function Content({savecred}){
  const[vendor,setVendor]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/allVendors").then((res)=>{
      //console.log(res.data.allVendors);
      setVendor(res.data.allVendors);
      
     }).catch((error)=>{
      console.log(error);
     })
     
    },[vendor])

    return(
        <div className="Nav">
          <nav>
            <h1 className="title">JS TIGERS</h1>
            <div className="button-container">
              <button className="nav-button">Create Vendor</button>
              <button  className="nav-button">Log Out</button>
                <img className="google-image" src={savecred.picture} style={{width:"60px", height:"60px",borderBlockColor:"antiquewhite", borderRadius:"50px", marginLeft:"30px", marginRight:"20px"}}></img>
            </div>
          </nav>
      <div className="container">
      {
        vendor.map((v)=>(<Card vendor={v}/>))
      }
      </div>
    </div>
    )
}