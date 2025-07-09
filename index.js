const express = require("express");
const path = require("path");
const connectToMongoDB = require("./mongoConnect");
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

require("dotenv").config();
const PORT = 8080;

const urlRoutes = require("./routes/url");
const staticRoutes = require("./routes/staticRouter");
const userRoutes = require("./routes/user");

const app = express();

connectToMongoDB(process.env.MONGOURI).then(() => {
  console.log("Connected to MongoDB");
});

//setting the view engine and the dir to render
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewares to accept json and form data too
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoutes);
app.use("/", staticRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
