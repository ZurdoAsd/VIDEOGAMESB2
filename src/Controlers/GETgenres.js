const { API2, API_KEY } = process.env;
const axios = require("axios");

const getGenres = async () => {
  const allGenres = await axios(`${API2}${API_KEY}`);
  const genresMa = allGenres.data.results;
  const resp = genresMa.map((e) => {
    return obj = {
      id: e.id,
      name: e.name,
    };
  });
  return resp
};

module.exports = { getGenres };
