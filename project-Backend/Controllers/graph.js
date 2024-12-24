const Graph = require("../Modals/graph"); // Import the Graph model

exports.getSalesData = async (req, res) => {
  const { timeRange } = req.query; // Extract timeRange from query parameters

  // Check if timeRange is provided
  if (!timeRange) {
    return res.status(400).json({ error: "timeRange query parameter is required" });
  }

  try {
    // Use the correct model name "Graph"
    const salesData = await graph.findOne({ timeRange });

    if (!salesData) {
      return res.status(404).json({ error: `No sales data found for timeRange: ${timeRange}` });
    }

    res.json({
      labels: salesData.labels,
      data: salesData.data,
    });
  } catch (error) {
    console.error("Error fetching sales data:", error.message);
    res.status(500).json({ error: "Failed to fetch sales data" });
  }
};
