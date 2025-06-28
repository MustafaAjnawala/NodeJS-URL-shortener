const express = require("express");
const path = require("path");
const connectToMongoDB = require("./mongoConnect");
const urlRoutes = require("./routes/url");
const staticRoutes = require("./routes/staticRouter");
require("dotenv").config();
const PORT = 8080;

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

app.use("/url", urlRoutes);
app.use("/", staticRoutes);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
