const express = require("express");
const URL = require("../model/url");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

//adding a new route for admins to view all created URL's in DB
router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  //get URL's for the particular user
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  //get URL's for the particular user
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

module.exports = router;
