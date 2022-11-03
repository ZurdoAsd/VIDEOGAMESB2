const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenidos al back-end");
});

module.exports = router;