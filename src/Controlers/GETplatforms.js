const { API3, API_KEY } = process.env;
const axios = require("axios");

const getPlatforms = async () => {
  const allPlatforms = await axios(`${API3}${API_KEY}`);
  const Platforms = allPlatforms.data.results;
  const resp = Platforms.map((e) => {
    return obj = {
      id: e.id,
      name: e.name,
    };
  });
  return resp
};

module.exports = { getPlatforms };
