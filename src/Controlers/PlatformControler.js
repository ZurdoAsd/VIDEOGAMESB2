const platforms = require("../models/platforms");
const { getPlatforms } = require("../Services/GETplatforms.js");

const loadPlatforms = async (req, res) => {
  try {
    const platformdb = await platforms.find({});
    if (platformdb.length === 0) {
      await getPlatforms();
      const platformapi = await platforms.find({});
      res.json(platformapi);
    } else {
      res.json(platformdb);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadPlatforms;
