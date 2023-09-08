const { Router } = require("express");
const router = Router();

const RouterVideogames = require("./videogames");
const RouterStart = require("./start");
const RouterGenres = require("./genres");
const RouterPlatforms = require("./platforms");

router.use("/videogames", RouterVideogames);
router.use("/", RouterStart);
router.use("/genres", RouterGenres);
router.use("/platforms", RouterPlatforms);

router.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  });
module.exports = router;

