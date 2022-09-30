const mongoose = require('mongoose')
const {Schema}= mongoose

const videogames = new Schema({
name: {type: String, required: true},
description:{type: String, required: true},
id:{
  type: String, required: true
  },

  description:{
    type: String, required: true
  },
  released:{
    type: String, required: true
  },
  rating: {
    type: String, required: true
  },
  background_image:{
    type: String, required: true
  },
  platforms: {
  type: Array, required: true
  }
})

module.exports =mongoose.model("Videogame",videogames)