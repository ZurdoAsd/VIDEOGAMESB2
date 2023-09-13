const express = require("express");
const router = express.Router();

const {
  getallVideogames,
  getIDlVideogames,
  putVideogames,
  deleteVideogames,
  createVideogames,
} = require("../Controlers/VideogameControler");

router
  .get("/", getallVideogames)
  .get("/:id", getIDlVideogames)
  .post("/", createVideogames)
  .put("/:id", putVideogames)
  .delete("/:id", deleteVideogames);

module.exports = router;
