const shortid = require("shortid");
const URL = require("../model/url");

//generate a new shortid for the url in body & post it into DB
async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) res.status(400).json({ error: "no url is entered" });
  const short = shortid.generate();

  const result = await URL.create({
    shortId: short,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    //for server side rendering purposes
    shortID: short,
  });
  // cld use below for client side rendering
  // return res.json({ result: result, shortID: short });
}

async function handleRedirectFromId(req, res) {
  const id = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: id,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  if (!entry) res.json({ msg: "pls enter a coorect shortId to redirect" });

  res.redirect(entry.redirectUrl);
}

async function handleGetAnalyticsForId(req, res) {
  const id = req.params.shortId;
  const result = await URL.findOne({
    shortId: id,
  });

  if (!result)
    res
      .status(400)
      .json({ msg: "please provide a valid short id to view analytics" });
  return res.json({
    totalRedirects: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleRedirectFromId,
  handleGetAnalyticsForId,
};
