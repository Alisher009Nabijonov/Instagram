const express = require("express");
const router = express.Router();
const uploads = require("../middleware/upload");

const {
  getAllUsers,
  getUser,
  editUser,
} = require("../controllers/users.controller");

router.get("/getAllUsers", getAllUsers);
router.get("/getUser/:id", getUser);
router.put("/editUser", uploads.single("avatar"), editUser);

module.exports = router;