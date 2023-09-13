const videogames = require("../models/videogames");
const { API, API_KEY } = process.env;
const axios = require("axios");

const infoapi = async () => {
  const games = [];
  let url = `${API}${API_KEY}`;

  for (let i = 1; i < 3; i++) {
    let pages = await axios.get(url);
    pages.data?.results.forEach((e) => {
      games.push({
        id: e.id,
        name: e.name,
        rating: e.rating,
        genres: e.genres.map((e) => e.name),
        platforms: e.platforms.map((e) => e.platform.name),
        image: e.background_image,
        background_image: e.short_screenshots[1].image,
        database_origin: false,
      });
    });
    url = pages.data.next;
  }
  return games;
};

const infodb = async () => {
  const getDb = await videogames.find({});
  let aux = [];
  getDb?.forEach((e) => {
    aux.push({
      id: e._id,
      name: e.name,
      rating: e.rating,
      genres: e.genres.map((e) => e),
      platforms: e.platforms.map((e) => e),
      image: e.image,
      background_image: e.background_image,
      database_origin: e.database_origin,
    });
  }
  
  );
  return aux;
};
const getAllGames = async () => {
  let games = Promise.all([infoapi(), infodb()]).then((resultado) => {
    return [...resultado[0], ...resultado[1]];
  });
  return games;
};

const getForQuery = (name, AllVideogames) => {
  const gamesFilt = AllVideogames.filter((e) =>
    e.name.toString().toLowerCase().includes(name.toString().toLowerCase()));
  return gamesFilt;
};

module.exports = { getForQuery, getAllGames };
