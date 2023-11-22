const mongoose =require('mongoose');

const vendorkaSchema =new mongoose.Schema({
   name:String,
   account:{type: String,required:true,unique:true,immutable:true},
   bankName:String,
   address:String,
   city:String,
   state:String,
   country:String,
   zipCode:String,
   createtime:{type:Date,immutable:true, default:Date.now},
   updatetime:{type:Date,default:Date.now},
   clientId:{type:String, immutable: true,required:true,}
});

module.exports = mongoose.model('Vendor',vendorkaSchema);