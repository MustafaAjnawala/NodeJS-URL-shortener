const express = require("express");
const { handleCreateNewUser, handleUserLogin } = require("../controller/user");
const router = express.Router();

router.post("/", handleCreateNewUser);
router.post("/login", handleUserLogin);

module.exports = router;
