const User = require("../models/user.model");

const fallowUser = async (req, res) => {
  try {
    const userToFallow = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.currentUserId);

    if (!userToFallow || !currentUser)
      return res.status(404).json({ message: "user topilmadi." });

    if (!userToFallow.fallowers.includes(currentUser._id)) {
      userToFallow.fallowers.push(currentUser._id);
      currentUser.fallowing.push(userToFallow._id);

      await userToFallow.save();
      await currentUser.save();

      res.status(200).json("you successfully fallowed.");
    } else {
      return res.status(400).json({ message: "you already fallowed" });
    }
  } catch (error) {
    res.status(500).json({ error, message: "error while fallowing." });
  }
};

const unFallowUser = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.currentUser);
    const userToUnfallow = await User.findById(req.params.id);

    if (!currentUser || !userToUnfallow)
      return res.status(404).json({ message: "user not found while unfallow" });

    if (userToUnfallow.fallowers.includes(userToUnfallow._id)) {
      userToUnfallow.fallowers = userToUnfallow.fallowers.filter(
        (id) => id.toString() !== currentUser._id.toString()
      );

      currentUser.fallowing = currentUser.fallowing.filter(
        (id) => id.toString() !== userToUnfallow._id.toString()
      );

      await currentUser.save();
      await userToUnfallow.save();

      return res.status(200).json({ message: "unfallowed successfully." });
    } else {
      return res.status(400).json("you should fallow first.");
    }
  } catch (error) {
    res.status(500).json({ error, message: "error while unfallowing" });
  }
};

module.exports = { fallowUser, unFallowUser };
