const express = require("express");
const router = express.Router();
const genres= require("../models/genres");
const { getGenres } = require("../Controlers/GETgenres");

router.get("/", async (req, res) => {
    try {
      const getallgenres = await getGenres();
      res.json(getallgenres);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;