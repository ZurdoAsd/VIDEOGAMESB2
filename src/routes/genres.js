const express = require("express");
const router = express.Router();
const loadGenres = require("../Controlers/GenresControler");

router.get("/", loadGenres);

module.exports = router;
