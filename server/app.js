const express = require("express");
const Listing = require("../database/Listing");

const app = express();

app.use(express.static(__dirname + "/../client/dist"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/photos/", function (req, res) {
  Listing.find(function (err, listings) {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(listings);
  });
});

app.get("/photos/:id", function (req, res) {
  Listing.find(function (err, listings) {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(listings);
  });
});

module.exports = app;
