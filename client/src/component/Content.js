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
    },[])

    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage=4;
    const lastIndex =currentPage * recordsPerPage;
    const firstIndex =lastIndex -recordsPerPage;
    const records =vendor.slice(firstIndex,lastIndex);
    const npage =Math.ceil(vendor.length/recordsPerPage)
    const numbers =[...Array(npage+1).keys()].slice(1)


    return(
        <div className="Nav">
          <nav>
            <h1 className="title">JS TIGERS</h1>
            <div className="button-container">
              <button className="nav-button"><Link style={{color:"black",textDecoration:"none"}}  to={`/createvendor/${clientId}`}>Create Vendor</Link></button>
              <button  className="nav-button" onClick={()=>window.location.reload()}>Log Out</button>
              <img className="google-image" src={savecred.picture} alt="google user" style={{width:"60px", height:"60px",borderBlockColor:"antiquewhite", borderRadius:"50px", marginLeft:"30px", marginRight:"20px"}}></img>
            </div>
          </nav>
      <div className="container">
    
      {records.map((v,index)=><Card vendor={v} key={index} clientId={clientId}/>)}
      </div>
      <div className="pagination-div">

      <ul className="pagination">
      <li className="page-item"><a class="page-link" href="#" onClick={prePage}>Previous</a></li>
     {numbers.map((n,index)=>(
        <li className={`page-item ${currentPage===n?'active':''}`} key={index}>
          <a className="page-link" href="#" onClick={()=>changeCPage(n)}>{n}</a>
        </li>
      ))
     }
    <li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
  </ul>
      </div>
      
    </div>
    )

   function nextPage() {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1);
    }
   }
   function changeCPage(id){
    setCurrentPage(id);
   }
   function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }
   }
}