const { API, API_KEY } = process.env;
const axios = require("axios");
const { Videogame } = require("../database");
const videogames = require("../models/videogames");

const getVideogamesID = async (id) => {
  try {
    const gameById = await axios(`${API}/${id}${API_KEY}`);
    const aux = gameById.data;
    let IdObj = {
      name: aux.name,
      rating: aux.rating,
      released: aux.released,
      genres: aux.genres.map((g) => g.name),
      platforms: aux.parent_platforms.map((p) => p.platform.name),
      image: aux.background_image,
      background_image: aux.background_image_additional,
      description: aux.description_raw,
    };
    return IdObj;
  } catch (error) {
    console.log(error);
  }
};

const editVideogamesID = async (id) => {
  try {
    // const gameupid = await Videogame.findOne({ where: { id: id } });
  
    return ("actualziado");
  } catch (error) {
    console.log(error);
  }
};

const deleteVideogamesID = async (id) => {
  try {
    const videogamedelete = await Videogame.findByPk(id);
    if (videogamedelete) {
      await videogamedelete.destroy();
      return "video juego elimindado";
    }
    return "videogame no encontrado";
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getVideogamesID, editVideogamesID, deleteVideogamesID };
