const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

router.use(express.json());
router.use(cookie());

const register = async (req, res) => {
  try {
    const password = req.body.password;
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: "Email already taken." });

    let username = await User.findOne({ username: req.body.username });

    if (username)
      return res.status(400).json({ message: "username already exist" });

    if (password.length < 6)
      return res
        .status(401)
        .json({ message: "Password must be at least 6 characters." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        fallowers: user.fallowers,
        fallowing: user.fallowing,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({ user, message: "Sign up successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Some thing went wrong while signing up." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ massage: "Email isn't found." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Check the password." });

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        fallowers: user.fallowers,
        fallowing: user.fallowing,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({ message: "Login successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Something went wrong while login in." });
  }
};

const profile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(404).json({ message: "token topilmadi." });

    jwt.verify(token, process.env.JWT_SECRET, async (err, userData) => {
      if (err) return res.status(401).json({ err, message: "yaroqsiz token." });

      try {
        const user = await User.findById(userData.id).populate("fallowers").populate("fallowing")
        if (!user) return res.status(404).json({ message: "user topilmadi" });

        const { _id, name, username, email, fallowers, fallowing } = user;

        res
          .status(200)
          .json({ _id, name, username, email, fallowers, fallowing });
      } catch (error) {
        res.status(404).json({ error, message: "user topilmadi error" });
      }
    });
  } catch (error) {
    res.status(500).json({ error, message: "error in profile," });
  }
};

const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true });
  res.status(200).json({ message: "Logged out successfully." });
};

module.exports = { register, login, profile, logout };
