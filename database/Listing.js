const mongoose = require("mongoose");
const db = require("./index.js");
const Image = require("./Image.js");
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  documentId: { type: Number, default: 0 },
  listingId: { type: Number },
  assets: [
    { url: { type: String }, description: { type: String, default: null } },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
