const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleRedirectFromId,
  handleGetAnalyticsForId,
} = require("../controller/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics", (req, res) => {
  res.status(400).json({
    msg: "Please provide a shortId in the URL to view analytics",
  });
});

router.get("/analytics/:shortId", handleGetAnalyticsForId);

router.get("/:shortId", handleRedirectFromId);

module.exports = router;
