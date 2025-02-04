const User = require("../Modals/regitration");
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User registration controller
const registerUser = async (req, res) => {


  try {
    const { name, email, phone, password, apartmentNumber, selectstate, area, landmark, addressType, pincode } = req.body;
    // Check if the user already exists
    let user = await User.findOne({ email:email });
     if (user) return res.status(400).json({ message: "User already exists" });

    // Create a new user
    user = new User({  name, email, phone, password, apartmentNumber, selectstate, area, landmark, addressType, pincode });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


const getUserByEmail = async (req, res) => {
  const { email } = req.params; // Get email from URL parameters

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};




const getmail = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },  // Ensure email is correctly used as a filter
      req.body,
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);  // Log actual error
    res.status(500).json({ message: "Failed to update user data", error: error.message });
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

         // Generate JWT token
            const token = jwt.sign(
              { id: user._id, username: user.username }, // Payload
              process.env.JWT_SECRET,                   // Secret Key
              { expiresIn: '1h' }                       // Options (e.g., expiration time)
            );

  
      // Login successful
      res.status(200).json({ message: "Login successful", user });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
  

module.exports = {
  registerUser, loginUser, getUserByEmail, getmail
};
