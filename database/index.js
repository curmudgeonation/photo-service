const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/photo-service";

const db = mongoose.connect(mongoUri);

module.exports = db;
