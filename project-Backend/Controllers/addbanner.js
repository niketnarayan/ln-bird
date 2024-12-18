const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/cloudinary");
const Banner = require("../models/banner");

// Add a new banner
router.post("/add_banner", upload.single("image"), async (req, res) => {
  try {
    const { title, url } = req.body;
    const imageUrl = req.file.path; // Cloudinary URL

    const newBanner = new Banner({ title, imageUrl, url });
    await newBanner.save();

    res.status(201).json({ message: "Banner added successfully", banner: newBanner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add banner" });
  }
});

// Get all banners
router.get("/banners", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});

// Delete a banner
router.delete("/delete_banner/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await Banner.findById(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    // Delete image from Cloudinary
    const publicId = banner.imageUrl.split("/").pop().split(".")[0]; // Extract public ID
    await cloudinary.uploader.destroy(`banners/${publicId}`);

    // Delete banner from database
    await Banner.findByIdAndDelete(id);

    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete banner" });
  }
});

module.exports = router;
