const mongoose=require('mongoose')

const add_product=new mongoose.Schema({
    product_code:{type:String},
    product_name:{type:String},
    product_price:{type:String},
    product_quantity:{type:String},
    product_image:{type:Array},
    product_description:{type:String},
    product_benefits:{type:Array},
    product_quantity1:{type:String}
   
    
    },{timestamps:true})

const addproduct=mongoose.model('add_product',add_product)
module.exports=addproduct