const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const Vendor =require('./vendor');
const dotenv =require('dotenv');
dotenv.config();
const app = express();
mongoose.set('strictQuery',false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const PORT = process.env.PORT;
const CONNECTION =process.env.CONNECTION;

app.use('/createvendor',(req,res,next)=>{
 if(req.body.clientId==null || req.body.account ==null){
  res.status(400);
  res.send("Enter Account No");
 }
 next()
})

app.use('/updateVendor/:id',async function(req,res,next){
  const {id} =req.params;
  const vendor=await Vendor.findById(id);
  try{
    if( req.body.clientId !== vendor.clientId){
      res.status(500);
      res.send("Your are not the owner cannot Update");
    }
    else{
      next();
    }
  }catch(error){
    res.send(error.message);
  }
})

app.use('/deleteVendor/:id',async(req,res,next)=>{
  const {id} =req.params;
  const vendor=await Vendor.findById(id);
  try{
    if( req.body.clientId !== vendor.clientId){
      res.status(500);
      res.send("Your are not the owner cannot Delete");
    }
    else{
      next();
    }
  }catch(error){
    res.send(error.message);
  }
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

//AUTHENTICATE
app.post('/createvendor',async(req,res)=>{
  const name =req.body.name;
  const account= req.body.account;
  const bankName= req.body.bankName;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipCode;
  const country = req.body.country;
  const clientId =req.body.clientId;

  try{
    const vendor=new Vendor({
      name:name,
      account:account,
      bankName:bankName,
      address:address,
      city:city,
      state:state,
      country:country,
      zipCode:zipcode,
      clientId:clientId,
    });
    await vendor.save();
    res.send(vendor);
  }catch(error){
     console.log(error.message);
     res.send(error.message);
  }
});

app.get('/vendor/:id',async(req,res)=>{
   try{
     const {id} =req.params;
     const vendor = await Vendor.findById(id);
     res.send({vendor});
    }catch(error){
      res.send("Does Not Exist");
    }
})

app.get('/allVendors',async(req,res)=>{
  try{
    const allVendors =await Vendor.find();
    res.send({allVendors:allVendors});
  } catch(error){
    res.send(error.message);
  }
})

//AUTHENTICATE IF IS ELIGIBLE TO UPDATE 
app.put('/updateVendor/:id',async(req,res)=>{
  try{
   const {id}=req.params;
   const updatedVendor =await Vendor.replaceOne({_id:id}, req.body);
   res.send("UPDATED");
  }catch(error){
    res.send(error.message)
  }
})

//AUTHENTICATE IF IS ELIGIBLE TO DELETE
app.delete('/deleteVendor/:id', async(req,res)=>{
  try{
    const vendorId =req.params.id;
    const del =await Vendor.deleteOne({_id: vendorId});
    res.send(`DELETED ${del.acknowledged}`)
  }catch(error){
    res.send("Vendor Does not Exists")
  }
})





const start =async() =>{
  try{

    await mongoose.connect(CONNECTION);
    
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}/`);
    });
  } catch(arror){
       console.log(arror.message ,"check mongoose connection")
  }
    
  
  };

start();


//notpassword


// ,async(req,res,next)=>{
//   const {id} =req.params;
//   const vendor=await Vendor.findById(id);
//   req.body.clientId=vendor.clientId;
//   next();
// },