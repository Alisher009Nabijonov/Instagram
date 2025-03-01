const User = require("../models/user.model");
const mongoose = require("mongoose")

const fallowUser = async (req, res) => {
  try {
    const userToFallow = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.currentUserId);

    if (!userToFallow || !currentUser)
      return res.status(404).json({ message: "user topilmadi." });

    if (!userToFallow.followers.includes(currentUser._id)) {
      userToFallow.followers.push(currentUser._id);
      currentUser.following.push(userToFallow._id);

      await userToFallow.save();
      await currentUser.save();

      res.status(200).json("you successfully fallowed.");
    } else {
      return res.status(400).json({ message: "you already fallowed" });
    }
  } catch (error) {
    res.status(500).json({ error, message: "error while following." });
  }
};

const unFallowUser = async (req, res) => {
  try {
    // ID larni oldin tekshiramiz
    if (!mongoose.Types.ObjectId.isValid(req.body.currentUser)) {
      return res.status(400).json({ message: "Invalid currentUser ID" });
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid userToUnfallow ID" });
    }

    const currentUser = await User.findById(req.body.currentUser);
    const userToUnfallow = await User.findById(req.params.id);

    if (!userToUnfallow) {
      return res.status(404).json({ message: "User to unfollow not found" });
    }

    if (!currentUser) {
      return res.status(404).json({ message: "Current user not found" });
    }

    if (userToUnfallow.followers.includes(currentUser._id.toString())) {
      userToUnfallow.followers = userToUnfallow.followers.filter(
        (id) => id.toString() !== currentUser._id.toString()
      );

      currentUser.following = currentUser.following.filter(
        (id) => id.toString() !== userToUnfallow._id.toString()
      );

      await currentUser.save();
      await userToUnfallow.save();

      return res.status(200).json({ message: "Unfollowed successfully." });
    } else {
      return res.status(400).json({ message: "You should follow first." });
    }
  } catch (error) {
    console.error("Error while unfollowing:", error); // Xatoni konsolda chiqarish
    return res.status(500).json({ error: error.message, message: "Error while unfollowing" });
  }
};

module.exports = { fallowUser, unFallowUser };
