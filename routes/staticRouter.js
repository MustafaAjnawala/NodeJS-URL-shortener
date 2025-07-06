const express = require("express");
const URL = require("../model/url");

const router = express.Router();

router.get("/", async (req, res) => {
  //if no user found then send to login page
  console.log(req.user);
  if (!req.user) return res.redirect("/login");
  //else get URL's for the particular user
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
