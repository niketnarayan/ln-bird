const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  image: {
    type: [], // Store the image path or URL
   
  },
});



 const Blog = mongoose.model('Blog', blogSchema);
 
 module.exports = Blog;