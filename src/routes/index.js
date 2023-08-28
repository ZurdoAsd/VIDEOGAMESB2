const { Router } = require("express");
const router = Router();

const RouterVideogames = require("./videogames");
const RouterSearch = require("./search");
const RouterStart = require("./start");
const RouterGenres = require("./genres");
const RouterPlatforms = require("./platforms");

router.use("/videogames", RouterVideogames);
router.use("/", RouterStart);
router.use("/search", RouterSearch);
router.use("/genres", RouterGenres);
router.use("/platforms", RouterPlatforms);
module.exports = router;

