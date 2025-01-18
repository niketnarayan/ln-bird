const banner = require('../Modals/banner')
const cloudinary=require('cloudinary').v2

const fs = require('fs');
const path = require('path');


require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
// Upload Banners
const uploadBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerLink } = req.body;




    const images = [];
  
      // Filter files by fieldname 'sliderBannerImage'
      const sliderBannerImages = req.files.filter(file => file.fieldname.includes('sliderBannerImage'));
      for (let file of sliderBannerImages) {
        try {
          const result = await cloudinary.uploader.upload(file.path);
          images.push(result.secure_url);

          fs.unlink(file.path, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
            } else {
              console.log('File deleted:', file.path);
            }
          });
        } catch (error) {
          console.error('Error uploading sliderBannerImage:', error);
        }
      }
    
  
      const images1 = [];
  
      // Filter files by fieldname 'sliderBannerImage'

      const productBannerImage = req.files.filter(file => file.fieldname.includes('productBannerImage'));
      for (let file of productBannerImage) {
        try {
          const result = await cloudinary.uploader.upload(file.path);
          images1.push(result.secure_url);

          fs.unlink(file.path, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
            } else {
              console.log('File deleted:', file.path);
            }
          });
        } catch (error) {
          console.error('Error uploading sliderBannerImage:', error);
        }
      }

    const newBanner = new banner({
      bannerTitle,
      bannerLink,
      sliderBannerImage: images,
       
      productBannerImage: images1
    });

    const resp=await newBanner.save();
    res.status(200).send({ message: 'Banner uploaded successfully', banner: resp });
  } catch (error) {
    console.error('Error uploading banner:', error);
    res.status(500).json({ message: 'Error uploading banner' });
  }
};

// Get All Banners
const getAllBanners = async (req, res) => {
  try {
    const resp = await banner.find();
    res.status(200).send({message:"banner fetch",banner:resp});
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ message: 'Error fetching banners' });
  }
};

// Delete Banner
const deleteBanner = async (req, res) => {
  try {
    const  id  = req.params._id;
    const resp = await banner.findByIdAndDelete({_id:id});

    res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    res.status(500).json({ message: 'Error deleting banner' });
  }
};


const editBanner = async (req, res) => {
  try {
    const id = req.params._id; // Get the banner ID from the request params
    const { bannerTitle, bannerLink } = req.body; // Get text fields from the request body

    // Find the existing banner
    const existingBanner = await banner.findById(id);
    if (!existingBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    // Handle file uploads
    let sliderBannerImage1 = existingBanner.sliderBannerImage; // Default to existing image
    let productBannerImage1 = existingBanner.productBannerImage; // Default to existing image


    const images = [];


    
  
    // Filter files by fieldname 'sliderBannerImage'
    const sliderBannerImages = req.files.filter(file => file.fieldname.includes('sliderBannerImage'));
    for (let file of sliderBannerImages) {
      try {
        const result = await cloudinary.uploader.upload(file.path);
        images.push(result.secure_url);

        fs.unlink(file.path, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('File deleted:', file.path);
          }
        });
      } catch (error) {
        console.error('Error uploading sliderBannerImage:', error);
      }
    }
  

    const images1 = [];

    // Filter files by fieldname 'sliderBannerImage'

    const productBannerImage = req.files.filter(file => file.fieldname.includes('productBannerImage'));
    for (let file of productBannerImage) {
      try {
        const result = await cloudinary.uploader.upload(file.path);
        images1.push(result.secure_url);

        fs.unlink(file.path, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('File deleted:', file.path);
          }
        });
      } catch (error) {
        console.error('Error uploading sliderBannerImage:', error);
      }
    }
    

    // Update the banner in the database
    const updatedBanner = await banner.findByIdAndUpdate(
      id,
      {
        bannerTitle,
      bannerLink,
      sliderBannerImage: images,
      productBannerImage: images1
      },
      { new: true } // Return the updated banner
    );

    res.status(200).json({
      message: "Banner updated successfully",
      updatedBanner, // Return the updated banner data
    });
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ message: "Error updating banner" });
  }
};






module.exports = {
  uploadBanner,
  getAllBanners,
  deleteBanner,
  editBanner,
};
