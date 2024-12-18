const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: Array, required: true }, // Cloudinary image URL
  url: { type: String, required: true },      // External link for the banner
});

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
