import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import '../style/form.css';


export default function Createvendor(){
  const {clientId} =useParams();
  const [name,setName]=useState('');
  const [account,setAccount]=useState('');
  const [bname,setBname]=useState('');
  const [add,setAdd]=useState('');
  const [city,setCity]=useState('');
  const [state,setState]=useState('');
  const [zip,setZip]=useState('');
  const [country,setCountry]=useState('');
  const [redirect,setRedirect]=useState(false);

  
    const createvendor = ()=>{
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

        const response= await fetch('https://crud-practice-assignment.vercel.app/createvendor',{
          method:'POST',
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

   const handleOnChangeZip = (e) => {
    setZip(e.target.value)
    console.log(zip)
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
    createvendor();
   }

    return(
        <div className="form-box">
      <Form >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Vendor Name" onChange={handleOnChangeName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Bank Account No</Form.Label>
          <Form.Control placeholder="1234 xxxx xxxx xx45" onChange={handleOnChangeBankAcc}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control placeholder="SBI Bank" onChange={handleOnChangeBankName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" onChange={handleOnChangeadd}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleOnChangeCity}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={handleOnChangeState}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Country</Form.Label>
          <Form.Control onChange={handleOnChangeCountry}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={handleOnChangeZip}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={handleOnSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    )
}