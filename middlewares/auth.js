const { getUser } = require("../service/auth");
const cookieParser = require("cookie-parser");

function checkForAuthentication(req, res, next) {
  // const authorizationHeaderValue = req.headers["authorization"];
  const tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie) return next();

  const token = tokenCookie;
  user = getUser(token);
  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("Un-Authorized");

    return next();
  };
}

/**
 * @deprecated the two functions below are deprecated
 */
// async function restrictToLoggedInUsers(req, res, next) {
//   // const userId = req.cookies.uid;
//   // console.log("cookies" + req.cookies);
//   const userId = req.headers["authorization"];

//   //if no session id exists
//   if (!userId) return res.redirect("/login");

//   let token = null;
//   if (typeof userId === "string" && userId.startsWith("Bearer ")) {
//     token = userId.split("Bearer ")[1];
//   }
//   if (!token) return res.redirect("/login");

//   // const user = getUser(userId);
//   const user = getUser(token);

//   //if user only doesnt exists
//   if (!user) return res.redirect("/login");

//   // if all good allow to got to next middleware
//   req.user = user;
//   next();
// }

// // not so strict checker function
// async function checkAuth(req, res, next) {
//   // const userId = req.cookies.uid;
//   const userId = req.headers["authorization"];

//   let token = null;
//   if (typeof userId === "string" && userId.startsWith("Bearer ")) {
//     token = userId.split("Bearer ")[1];
//   }

//   const user = token ? getUser(token) : null;

//   req.user = user;
//   next();
// }

module.exports = { checkForAuthentication, restrictTo };
