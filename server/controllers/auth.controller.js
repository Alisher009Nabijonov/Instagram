const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const router = express.Router();

router.use(express.json());

// **Register (Ro‘yxatdan o‘tish)**
const register = async (req, res) => {
  try {
    const { name, username, email, password, avatar, bio, gender } = req.body;

    // **Foydalanuvchi bor yoki yo‘qligini tekshirish**
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already taken." });

    let usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.status(400).json({ message: "Username already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });

    // **Parolni xesh qilish**
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // **Yangi foydalanuvchi yaratish**
    user = new User({
      name,
      username,
      email,
      password: hashedPassword,
      avatar,
      bio,
      gender,
    });

    await user.save();

    // **Token yaratish**
    const token = jwt.sign(
      {
        id: user._id,
        name,
        username,
        email,
        followers: user.followers,
        following: user.following,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // **Cookie orqali token jo‘natish**
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(201).json({ user, message: "Sign up successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while signing up.",
      error: error.message,
    });
  }
};

// **Login (Tizimga kirish)**
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // **Foydalanuvchini topish**
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email isn't found." });

    // **Parolni tekshirish**
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password." });

    // **Token yaratish**
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        followers: user.followers,
        following: user.following,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ message: "Login successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while logging in.",
      error: error.message,
    });
  }
};

// **Profile (Foydalanuvchi ma'lumotlarini olish)**
const profile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Token not found." });

    jwt.verify(token, process.env.JWT_SECRET, async (err, userData) => {
      if (err) return res.status(401).json({ message: "Invalid token." });

      try {
        const user = await User.findById(userData.id)
          .populate("followers")
          .populate("following");

        if (!user) return res.status(404).json({ message: "User not found." });

        res.status(200).json({
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio,
          gender: user.gender,
          followers: user.followers,
          following: user.following,
          createdAt: user.createdAt,
        });
      } catch (error) {
        res.status(500).json({
          message: "Error retrieving user profile.",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in profile.", error: error.message });
  }
};

// **Logout (Tizimdan chiqish)**
const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true });
  res.status(200).json({ message: "Logged out successfully." });
};

module.exports = { register, login, profile, logout };
