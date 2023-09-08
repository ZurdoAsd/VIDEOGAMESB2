const mongoose = require("mongoose");
const { Schema } = mongoose;

const videogames = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  released: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  background_image: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  platforms: {
    type: Array,
    required: true,
  },
  genres: {
    type: Array,
    required: true,
  },
  database_origin: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Videogame", videogames);
