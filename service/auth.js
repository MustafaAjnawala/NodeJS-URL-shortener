const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_key;

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = { setUser, getUser };
