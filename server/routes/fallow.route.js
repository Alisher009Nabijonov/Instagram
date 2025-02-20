const express = require("express");
const router = express.Router();

const {
  fallowUser,
  unFallowUser,
} = require("../controllers/fallow.controller");

router.post("/:id/fallow", fallowUser);
router.post("/:id/unFallow", unFallowUser);

module.exports = router;
