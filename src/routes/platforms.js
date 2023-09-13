const express = require("express");
const router = express.Router();
const loadPlatforms = require("../Controlers/PlatformControler");

router.get("/", loadPlatforms);

module.exports = router;
