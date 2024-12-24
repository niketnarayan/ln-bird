const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  timeRange: { type: String, required: true, enum: ["Day", "Week", "Month"] },
  labels: { type: [String], required: true },
  data: { type: [Number], required: true },
});

// The model name is "Graph" (use this name in your controller)
module.exports = mongoose.model("graph", salesSchema);
