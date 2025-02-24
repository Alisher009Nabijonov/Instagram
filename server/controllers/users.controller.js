const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("fallowing").populate("fallowers");
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
    const user = await User.findById(req.params.id)
      .populate("fallowing")
      .populate("fallowers");
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

const editUser = async (req, res) => {
  try {
    const { userId, name, username, bio } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "user not found." });

    user.name = name;
    user.username = username;
    user.bio = bio;

    if (req.file) {
      user.avatar = `/uploads/${req.file.filename}`;
    }

    await user.save();

    res.json({ message: "user edited successfully edited." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "user there some error while editing user.", error });
  }
};

module.exports = { getAllUsers, getUser, editUser };
