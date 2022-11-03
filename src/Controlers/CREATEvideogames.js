
const { Videogame } = require("../models/videogames");
const mongoose =require ("mongoose")

const CreateVideogame = async () => {
  try {
    const {name,image,background_image,description,released,rating,genres,platforms} = req.body;

    // if (!name || !description || !platforms || !genres) {
    //   res.status(404).send("Falta data");}
      await Videogame.create({
        name,
        image,
        background_image: background_image ||"https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg",
        description,
        released,
        rating,
        platforms,
        genres,
        database_origin: true,
      });
     return("videojuego creado");
    
  } catch (error) {
    console.log(error);
  }
};
module.exports = { CreateVideogame};
