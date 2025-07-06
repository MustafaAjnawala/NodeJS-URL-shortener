const { v4: uuidv4 } = require("uuid");
const User = require("../model/user");
const { setUser } = require("../service/auth");

async function handleCreateNewUser(req, res) {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    // console.log("Wrong Pass or email");
    return res.render("login", {
      error: "Please check your email or password",
    });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

module.exports = { handleCreateNewUser, handleUserLogin };
