const mongoose = require("mongoose");
const { Schema } = mongoose;

const platforms = new Schema({
  name: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("Platforms", platforms);
