const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

app.get("/weather", (req, res) => {
  res.send("Welcome to Weather page");
});

app.get("*", (req, res) => {
  res.send("404 error Page not Found");
});

app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
