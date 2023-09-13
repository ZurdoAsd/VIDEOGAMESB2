
const genres= require("../models/genres");
const getGenres = require("../Services/GETgenres");

const loadGenres = async (req, res) => {
  const getdbgenres = await genres.find({});
    try {
    if (getdbgenres.length===0) {
     await getGenres()
     const getapigenres = await genres.find({});
      res.json(getapigenres) }
      else{res.json(getdbgenres)}
      
    } catch (error) {
      console.log(error);
    }
  };

module.exports = loadGenres ;