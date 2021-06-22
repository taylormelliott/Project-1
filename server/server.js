const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/hello", function (req, res) {
  res.sendFile(path.join(__dirname, "../styles.css"));
});

app.get("/bob", function (req, res) {
  res.sendFile(path.join(__dirname, "../Images/Bobross.png"));
});

app.get("/Eightball", function (req, res) {
  res.sendFile(path.join(__dirname, "../Images/Eightball.png"));
});

app.get("/js", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.js"));
});
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
