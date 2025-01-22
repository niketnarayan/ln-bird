const express=require('express');
const {add_product,viewproduct, delete_product,edit_product, viewproductbyid, viewproductbycategory} = require('../Controllers/addproduct');
const upload=require('../Middleware/file');
const { uploadBanner, getAllBanners, deleteBanner, editBanner } = require('../Controllers/addbanner');
const uploadFields = require('../Middleware/bannerfile');
const { createOrder, getAllOrders } = require('../Controllers/order');
const { signup, login } = require('../Controllers/user');
const protectRoute=require('../Middleware/routemiddle');
const payment = require('../Controllers/payment');
const { createBlog, getBlogs, deleteBlog, editBlog, viewblogbyid } = require('../Controllers/blog');
const { registerUser, loginUser } = require('../Controllers/registation');
const router=express.Router()






router.post('/addproduct',upload.any(),protectRoute,add_product)
// router.post('/addproducts',protectRoute,add_product)
router.get('/getproduct',viewproduct)
router.get('/getproductbyid/:_id',viewproductbyid)
router.get('/getproductbycategory/:product_category',viewproductbycategory)
router.delete("/deleteproduct/:_id",delete_product);
router.put('/edit_product/:_id',upload.any(),edit_product);
router.post('/payment',payment)


router.post(
    '/uploadBanner',
   uploadFields,
    uploadBanner
  );
  
  // Get All Banners
  router.get('/getAllBanners', getAllBanners);
  
  // Delete Banner
  router.delete('/deleteBanner/:_id', deleteBanner);

  router.put(
    "/editBanner/:_id",
    uploadFields,
    editBanner
  );
  
  router.post('/createOrder', createOrder);
  router.get('/getAllOrders', getAllOrders);

  router.post('/signup', signup);
  router.post('/login', login);

  router.post('/addblog',upload.any(), createBlog);
  router.get('/getblog', getBlogs);
  router.delete('/deleteblog/:id' , deleteBlog);
  router.put("/editblog/:id" , upload.single("image"), editBlog)
  router.get('/getblogbyid/:_id', viewblogbyid)


  router.post('/register',registerUser);
  router.post('/logins',loginUser);

 

module.exports=router