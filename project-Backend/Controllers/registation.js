const User = require("../Modals/regitration");

// User registration controller
const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    
    // Check if the user already exists
    let user = await User.findOne({ email:email });
     if (user) return res.status(400).json({ message: "User already exists" });

    // Create a new user
    user = new User({ name, email, phone, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Login successful
      res.status(200).json({ message: "Login successful", user });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
  

module.exports = {
  registerUser, loginUser,
};
