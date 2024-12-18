const express=require('express');
const {add_product,viewproduct, delete_product,edit_product, viewproductbyid} = require('../Controllers/addproduct');
const upload=require('../Middleware/file')
const router=express.Router()



router.post('/addproduct',upload.any(),add_product)
router.post('/addproducts',add_product)
router.get('/getproduct',viewproduct)
router.get('/getproductbyid/:_id',viewproductbyid)
router.delete("/deleteproduct/:_id",delete_product);
router.put('/edit_product/:_id',edit_product);

module.exports=router