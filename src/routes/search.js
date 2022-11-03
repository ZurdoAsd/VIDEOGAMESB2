const express = require("express");
const router = express.Router();
const { getListQuery} = require("../Controlers/GETvideogames");
router.get("/", async (req, res) => {
    try {
      const { name } = req.query;
      if (name) {
        const getquery = await getListQuery(name);
        res.json(getquery);
      } else {
        res.json("require name");
      }
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;