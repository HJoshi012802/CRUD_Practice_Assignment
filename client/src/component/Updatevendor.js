import {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/form.css';

export default function Updatedvendor(){
    const {id} =useParams();
    useEffect(()=>{
        axios.get(`https://crud-practice-assignment.vercel.app/vendor/${id}`).then((res)=>{
                setName(res.data.vendor.name);
                setAccount(res.data.vendor.account);
                setBname(res.data.vendor.bankName);
                setAdd(res.data.vendor.address);
                setCity(res.data.vendor.city);
                setState(res.data.vendor.state);
                setZip(res.data.vendor.zipCode);
                setCountry(res.data.vendor.country);
                setClientId(res.data.vendor.clientId);
       }).catch((error)=>{
        console.log(error);
       })
      },[])

 
  
  const [name,setName]=useState('');
  const [account,setAccount]=useState('');
  const [bname,setBname]=useState('');
  const [add,setAdd]=useState('');
  const [city,setCity]=useState('');
  const [state,setState]=useState('');
  const [zip,setZip]=useState('');
  const [country,setCountry]=useState('');
  const [clientId,setClientId]=useState('');
  const [redirect,setRedirect]=useState(false);
  
    
  
    const updatevendor = ()=>{
      vendor();
      async function vendor(){
        var data ={
          "name":name,
          "account":account,
          "bankName":bname,
          "address":add,
          "city": city,
          "state":state,
          "zipCode":zip,
          "country": country,
          "clientId":clientId,
        }

        const response= await fetch(`https://crud-practice-assignment.vercel.app/updateVendor/${id}`,{
          method:'PUT',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(data),
        })
        if(response.ok){
          setRedirect(true);
         }}
        if(redirect){
         window.location.href = '/'
         }
   }

   const handleOnChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
   }

   const handleOnChangeBankAcc = (e) => {
    setAccount(e.target.value)
    console.log(account)
   }

   const handleOnChangeadd = (e) => {
    setAdd(e.target.value)
    console.log(add)
   }

   const handleOnChangeBankName = (e) => {
    setBname(e.target.value)
    console.log(bname)
   }

   const handleOnChangeCity = (e) => {
    setCity(e.target.value)
    console.log(city)
   }


   const handleOnChangeCountry = (e) => {
    setCountry(e.target.value)
    console.log(country)
   }

   const handleOnChangeState = (e) => {
    setState(e.target.value)
    console.log(state)
   }

   const handleOnSubmit = (e) => {
    e.preventDefault();
    updatevendor();
   }

    return(
        <div className="form-box">
      <Form className="m-6">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Vendor Name" value={name}  onChange={handleOnChangeName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Bank Account No</Form.Label>
          <Form.Control placeholder="1234 xxxx xxxx xx45" value={account} onChange={handleOnChangeBankAcc}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control placeholder="SBI Bank" value={bname} onChange={handleOnChangeBankName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" value={add} onChange={handleOnChangeadd}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleOnChangeCity} value={city}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={handleOnChangeState} value={state}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Country</Form.Label>
          <Form.Control onChange={handleOnChangeCountry} value={country}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={(e=>setZip(e))} value={zip}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={handleOnSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    )
}