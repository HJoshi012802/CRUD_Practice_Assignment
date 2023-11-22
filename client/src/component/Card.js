import { Link } from "react-router-dom";
import React from "react";

export default function Card({vendor, index, clientId}){
    const id =vendor._id;
    const condi=clientId===vendor.clientId;

    const DeletePost = async() => {
        const data={clientId: clientId};
        console.log(clientId);
        await fetch(`http://localhost:8080/deleteVendor/${id}`,{
          method:'DELETE',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(data),
        }).catch((error)=>{
            console.log("Not the Owner");
        })
          window.location.reload(false);
    }

    return(
        <div className="vendor-card" key={index}>
        <h3>{vendor.name}</h3>
        <h5>{vendor.account}</h5>
        <h6>{vendor.bankName}</h6>
        <p>{vendor.address}</p>
        <div className="card-address">
        <span>{vendor.city}</span>
        <span>{vendor.state}</span>
        <span>{vendor.country}</span>
        <span>{vendor.zipCode}</span>
        </div>
        {condi ?(
        <div className="card-button">
        <button className="edit"><Link style={{color:"white",textDecoration:"none"}} to={`/updatevendor/${id}`}>Edit</Link></button>
        <button className="delete" onClick={() => {DeletePost()}}>Delete</button>
        </div>
        ) : (
        <div className="card-button">
        <button className="disabled">disabled</button>
        
        </div>
        )
            }
       </div>
    );
}



