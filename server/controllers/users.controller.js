const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0)
      return res.status(404).json({ message: "users not found" });

    res.status(200).json({ message: "successfully take all users.", users });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "error while getting all users.",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve user.",
      error: error.message,
    });
  }
};

module.exports = { getAllUsers, getUser };
