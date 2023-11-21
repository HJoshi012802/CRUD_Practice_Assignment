import React from "react";

export default function Card({vendor}){
    return(
        <div className="vendor-card">
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
        <div className="card-button">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
        </div>
       </div>
    );
}
