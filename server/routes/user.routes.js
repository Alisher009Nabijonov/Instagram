const express = require("express");
const router = express.Router();

const { getAllUsers, getUser } = require("../controllers/users.controller");

router.get("/getAllUsers", getAllUsers);
router.get("/getUser/:id", getUser);

module.exports = router;
