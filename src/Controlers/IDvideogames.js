const { API, API_KEY } = process.env;
const axios = require("axios");
const  videogames = require("../models/videogames");

const getVideogamesID = async (id) => {
  try {
    if(id.length<8){
    const gameById = await axios(`${API}/${id}${API_KEY}`);
    const aux = gameById.data.id;
    const aux2 = gameById.data;
    if(aux.toString() === id.toString()){
      return IdObj = {
      id: aux2.id,
      name: aux2.name,
      image: aux2.background_image,
      background_image: aux2.background_image_additional,
      genres: aux2.genres.map((g) => g.name),
      rating: aux2.rating,
      platforms: aux2.parent_platforms.map((p) => p.platform.name),
      released: aux2.released,
      description: aux2.description_raw}
     }
  
   }else{

 const gamedb2= await videogames.findById(id);

 return gamedb = {
  id: gamedb2._id,
  name: gamedb2.name,
  image: gamedb2.background_image,
  background_image: gamedb2.background_image,
  genres: gamedb2.genres,
  rating: gamedb2.rating,
  platforms: gamedb2.platforms,
  released: gamedb2.released,
  description: gamedb2.description, }
}
  } catch (error) { console.log(error); }
};

const editVideogamesID = async (id) => {
  try {
    // const gameupid = await videogames.findOne({ where: { id: id } });

    return ("actualziado");
  } catch (error) {
    console.log(error);
  }
};

const deleteVideogamesID = async (id) => {
  try {
    const videogamedelete = await videogames.findByPk(id);
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
