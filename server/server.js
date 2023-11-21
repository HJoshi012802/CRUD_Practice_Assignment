const express = require('express');
const mongoose = require('mongoose');
const Vendor =require('./vendor');
const dotenv =require('dotenv');
const vendor = require('./vendor');
dotenv.config();
const app = express();
mongoose.set('strictQuery',false);

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const PORT = process.env.PORT;
const CONNECTION =process.env.CONNECTION;


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.post('/createvendor',async(req,res)=>{
  const name =req.body.name;
  const account= req.body.account;
  const bankName= req.body.bankName;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipCode;
  const country = req.body.country;

  try{
    const vendor=new Vendor({
      name:name,
      account:account,
      bankName:bankName,
      address:address,
      city:city,
      state:state,
      country:country,
      zipCode:zipcode
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

app.put('/updateVendor/:id',async(req,res)=>{
  try{
   const {id}=req.params;
   const updatedVendor =await Vendor.replaceOne({_id:id}, req.body);
   res.send("UPDATED");
  }catch(error){
    res.send(error.message)
  }
})

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