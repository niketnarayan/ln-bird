const Blog = require('../Modals/blog');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Controller to create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    // Ensure the file is uploaded and accessible
    const result = await cloudinary.uploader.upload(req.file.path); // Use req.file.path

    // Save the image URL in the blog data
    const image = [result.secure_url];

    // Create a new blog entry
    const newBlog = new Blog({
      title,
      date,
      description,
      image, // Save Cloudinary image URL in the database
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const viewblogbyid= async(req,res)=>
  {
      try {
        const id=req.params._id
          const resp=await Blog.find({_id:id})
          res.status(200).send({message:"blog data fetch",blog:resp})
      } catch (error) {
          console.log(error);
          
      }
  }

// Controller to delete a blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, description } = req.body;

    // Find the blog by ID
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Update fields
    blog.title = title || blog.title;
    blog.date = date || blog.date;
    blog.description = description || blog.description;

    // Handle image upload if provided
    if (req.file) {
      // Delete the old image from Cloudinary (optional)
      const publicId = blog.image[0].split("/").pop().split(".")[0]; // Extract public ID
      await cloudinary.uploader.destroy(publicId);

      // Upload the new image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      blog.image = [result.secure_url];
    }

    // Save the updated blog
    await blog.save();
    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBlog, getBlogs, deleteBlog, editBlog, viewblogbyid };
