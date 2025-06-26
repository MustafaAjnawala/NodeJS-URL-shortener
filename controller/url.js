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
  });

  return res.json({ result: result, shortID: short });
}

module.exports = { handleGenerateNewShortUrl };
