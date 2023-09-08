const express = require("express");
const router = express.Router();
const genres= require("../models/genres");
const { getGenres } = require("../Controlers/GETgenres");

router.get("/", async (req, res) => {
  const dbgenres = await genres.find({});
    try {
    if (dbgenres.length===0) {
     await getGenres()
     const getapigenres = await genres.find({});
      res.json(getapigenres) }
      else{res.json(dbgenres)}
      
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;