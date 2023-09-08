const { API3, API_KEY } = process.env;
const platforms = require("../models/platforms");
const axios = require("axios");

const getPlatforms = async () => {
  const allPlatforms = await axios(`${API3}${API_KEY}`);
  const Platformss = allPlatforms.data.results;
  const resp = Platformss.map((e) => ({
    name: e.name,
  }));
  const result = await platforms.create(resp);
  console.log(result);

};

module.exports = { getPlatforms };
