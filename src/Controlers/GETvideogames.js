const  videogames = require("../models/videogames");
const { API, API_KEY } = process.env;
const axios = require("axios");

const get1 = async () => {
  const games = [];
  let url = `${API}${API_KEY}`;

  for (let i = 1; i < 3; i++) {
    let pages = await axios.get(url);
    pages.data?.results.forEach((e) => {
      games.push({
        id: e.id,
        name: e.name,
        image: e.background_image,
        background_image: null,
        database_origin: false,
        genres: e.genres.map((e) => e.name),
        rating: e.rating,
        plataforms: e.platforms.map(e => e.platform.name),
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
      description: e.description,
      image: e.image,
      released: e.released,
      background_image: e.background_image,
      genres: e.genres.map((e) => e),
      rating: e.rating,
      plataforms: e.platforms.map((e) => e),
      database_origin: e.database_origin,
    });
  });
  return aux;
};
const getAllGames = async () => {
  let allinfo = Promise.all([get1(), infodb()]).then((resultado) => {
    return [...resultado[0], ...resultado[1]];
  });
  return allinfo;
};

const getQuery = async (name) => {
  const games = await getAllGames();
  const gamesFilt = games.filter(
    (e) => e.name.toString().toLowerCase() === name.toLowerCase()
  );

  if(gamesFilt.length===0){
  return ("no se encontraron resultados")
  }
  return gamesFilt;
};
const getListQuery= async (name) => {
  const games = await getAllGames();
  const gamesFilt = games.filter(
    (e) => e.name.toString().toLowerCase().includes(name.toLowerCase())
  );

  if(gamesFilt.length===0){
  return ("no se encontraron resultados")
  }
  return gamesFilt;
};
module.exports = { getQuery, getAllGames,getListQuery };
