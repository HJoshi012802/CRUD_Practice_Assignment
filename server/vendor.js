const mongoose =require('mongoose');

const vendorkaSchema =new mongoose.Schema({
   name:{type:String},
   account:{type: String,required:true,unique:true},
   bankName:String,
   address:String,
   city:String,
   state:String,
   country:String,
   zipCode:String,
   createtime:{type:Date,immutable:true, default:Date.now},
   updatetime:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Vendor',vendorkaSchema);