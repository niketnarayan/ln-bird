const addproduct = require('../Modals/product');
const cloudinary=require('cloudinary').v2

require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

const add_product = async (req, res) => {
    try {
        const { 
            product_code,
            product_name,
            product_price,
            product_quantity,
            product_image,
            product_description,
            product_benefits,
            
        } = req.body;


        // 'req.files' will contain the uploaded files
         const newDocumentPic = [];

        if (req.files) {
            // Upload files to Cloudinary and get the URLs
            for (let file of req.files) {
              const result = await cloudinary.uploader.upload(file.path);
              newDocumentPic.push(result.secure_url);  // Store the URL of the uploaded image
              // Optionally, you could delete the file from the server after uploading (uncomment below if needed)
              // fs.unlinkSync(file.path);
            }
          }
// console.log(req.files);

        // Create a new contact with the uploaded Cloudinary URLs
        const newAddproduct = new addproduct({
           
            product_code,
            product_name,
            product_price,
            product_quantity,
            product_image:newDocumentPic,
            product_description,
            product_benefits,
            
        });

        // Save to database
        const resp = await newAddproduct.save();
        res.status(200).send({ message: "product saved", user: resp });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error saving product", error });
    }
};

const viewproduct= async(req,res)=>
{
    try {
        const resp=await addproduct.find()
        res.status(200).send({message:"product data fetch",product:resp})
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={add_product,viewproduct};