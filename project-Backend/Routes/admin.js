const express=require('express');
const {add_product,viewproduct} = require('../Controllers/addproduct');
const upload=require('../Middleware/file')
const router=express.Router()



router.post('/addproduct',upload.any(),add_product)
router.get('/getproduct',viewproduct)

module.exports=router