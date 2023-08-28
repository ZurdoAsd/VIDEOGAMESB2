const express = require("express");
const router = express.Router();
const platforms = require("../models/platforms");
const { getPlatforms } = require("../Controlers/GETplatforms.js");

router.get("/", async (req, res) => {
  try {
    const getallplatforms = await getPlatforms();
    res.json(getallplatforms);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
