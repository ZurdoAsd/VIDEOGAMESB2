const express = require("express");
const router = express.Router();
const platforms = require("../models/platforms");
const { getPlatforms } = require("../Controlers/GETplatforms.js");

router.get("/", async (req, res) => {
  const platformdb = await platforms.find({});
  try {
  
    if (platformdb===0) {
      await getPlatforms()
      const platformapi = await platforms.find({});
      res.json(platformapi);
    } else {
      res.json(platformdb);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
