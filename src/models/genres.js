const mongoose = require("mongoose");
const { Schema } = mongoose;

const genres = new Schema({
  name: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("Genres", genres);
