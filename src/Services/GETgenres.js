const { API2, API_KEY } = process.env;
const genres= require("../models/genres");
const axios = require("axios");

const getGenres = async () => {
  const allGenres = await axios(`${API2}${API_KEY}`);
  const genresMa = allGenres.data.results;
  const resp = genresMa.map((e) => {
    return obj = {
      name: e.name,
    };
  });

  const result = await genres.create(resp);
  console.log(result);
};

module.exports = { getGenres };
