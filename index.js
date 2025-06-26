const express = require("express");
const connectToMongoDB = require("./mongoConnect");
const urlRoutes = require("./routes/url");
require("dotenv").config();
const PORT = 8080;

const app = express();

connectToMongoDB(process.env.MONGOURI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
