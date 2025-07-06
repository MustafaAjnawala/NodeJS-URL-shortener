const { getUser } = require("../service/auth");
const cookieParser = require("cookie-parser");

async function restrictToLoggedInUsers(req, res, next) {
  const userId = req.cookies.uid;
  console.log("cookies" + req.cookies);

  //if no session id exists
  if (!userId) return res.redirect("/login");
  const user = getUser(userId);

  //if user only doesnt exists
  if (!user) return res.redirect("/login");

  // if all good allow to got to next middleware
  req.user = user;
  next();
}

// not so strict checker function
async function checkAuth(req, res, next) {
  const userId = req.cookies.uid;

  const user = getUser(userId);

  req.user = user;
  next();
}

module.exports = { restrictToLoggedInUsers, checkAuth };
