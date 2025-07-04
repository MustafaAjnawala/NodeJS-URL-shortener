const express = require("express");
const URL = require("../model/url");

const router = express.Router();

router.get("/", async (req, res) => {
  allUrls = await URL.find();
  return res.render("home", {
    urls: allUrls,
  });
});

module.exports = router;
