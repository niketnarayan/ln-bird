const Review = require("../Modals/review");

// ✅ Add a Review
const addReview = async (req, res) => {
    try {
        const { productId, name, email, rating, comment } = req.body;
        const review = new Review({ productId, name, email, rating, comment });
        await review.save();
        res.status(200).json({ success: true, message: "Review added successfully!" });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
};

// ✅ Get Reviews for a Product
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId });
        res.status(200).json(reviews);
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
};

// ✅ Delete a Review
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Review deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
    addReview , getReviews
}
