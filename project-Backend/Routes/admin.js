const express=require('express');
const {add_product,viewproduct, delete_product,edit_product, viewproductbyid} = require('../Controllers/addproduct');
const upload=require('../Middleware/file');
const { uploadBanner, getAllBanners, deleteBanner, editBanner } = require('../Controllers/addbanner');
const uploadFields = require('../Middleware/bannerfile');
const router=express.Router()






router.post('/addproduct',upload.any(),add_product)
router.post('/addproducts',add_product)
router.get('/getproduct',viewproduct)
router.get('/getproductbyid/:_id',viewproductbyid)
router.delete("/deleteproduct/:_id",delete_product);
router.put('/edit_product/:_id',edit_product);


router.post(
    '/uploadBanner',
   uploadFields,
    uploadBanner
  );
  
  // Get All Banners
  router.get('/getAllBanners', getAllBanners);
  
  // Delete Banner
  router.delete('/deleteBanner/:_id', deleteBanner);

  router.put('/editBanner/:_id',editBanner)
  

module.exports=router