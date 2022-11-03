const { Router } = require("express");
const router = Router();

const RouterVideogames = require("./videogames");
const RouterSearch = require("./search");
const RouterStart = require("./start");

router.use("/videogames", RouterVideogames);
router.use("/", RouterStart);
router.use("/search", RouterSearch);
module.exports = router;

