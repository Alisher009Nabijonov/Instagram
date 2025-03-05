const express = require("express");
const router = express.Router();

const {
  fallowUser,
  unFallowUser,
} = require("../controllers/fallow.controller");

router.post("/:id/fallow", fallowUser);
router.post("/:id/unFollow", unFallowUser);

module.exports = router;
