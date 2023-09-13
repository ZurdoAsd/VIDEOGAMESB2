const { API, API_KEY, AuxImage } = process.env;
const axios = require("axios");
const videogames = require("../models/videogames");

const getVideogamesID = async (id) => {
  try {
    if (!id)
    return `Nro Id is required`;


    if (id.length < 8) {
      const num = parseInt(id);
      const gameById = await axios(`${API}/${num}${API_KEY}`);
      const aux = gameById.data.id;
      const {
        name,
        genres,
        rating,
        released,
        description_raw,
        background_image_additional,
        background_image,
        parent_platforms,
      } = gameById.data;

      if (aux.toString() === num.toString()) {
        return (IdObj = {
          id: aux,
          name: name,
          image: background_image,
          background_image: background_image_additional,
          genres: genres.map((g) => g.name),
          rating: rating,
          platforms: parent_platforms.map((p) => p.platform.name),
          release: released,
          description: description_raw,
        });
      }
    } else {
      const gamedb2 = await videogames.findById(id);

      const {
        _id,
        name,
        genres,
        rating,
        released,
        description,
        image,
        background_image,
        platforms,
      } = gamedb2;

      return (gamedb = {
        id: _id,
        name,
        image,
        background_image,
        genres,
        rating,
        platforms,
        released,
        description,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const editVideogamesID = async (data, id) => {
  try {
    if (!id)
    return `Nro Id is required`;
  
    const {
      name,
      rating,
      released,
      image,
      background_image,
      description,
      platforms,
      genres,
    } = data;

    const verificationName = await videogames.find({name:name});
    if (verificationName.length>0)
    return `cannot update when the name of the game already exists`;


    const editVideogamesID = {
      name,
      rating,
      released,
      description,
      platforms,
      genres,
      image,
      background_image,
    };
    // await videogames.findByIdAndUpdate(id, editVideogamesID);
    // return "Updated";
    await videogames.updateOne({ _id: id }, editVideogamesID);
    return `the video game was updated`;
  } catch (error) {
    console.log(error);
  }
};

const deleteVideogamesID = async (id) => {
  try {
    if (!id)
    return `Nro Id is required`;


    const videogamedata = await videogames.findById({ _id: id });
    await videogames.findByIdAndRemove({ _id: id });
    return `the video game ${videogamedata.name} was deleted`;
  } catch (error) {
    console.log(error);
  }
};
const createVideogame = async (data) => {
  try {
    const {
      name,
      image,
      background_image,
      description,
      released,
      rating,
      genres,
      platforms,
    } = data;

   
   if (!name || !description || !released || !rating || !genres || !platforms)
      return `I need more data to create`;

      const verificationName = await videogames.find({name:name});
    if (verificationName.length>0)
    return `cannot create when the name of the game already exists`;

    const newdata = {
      name,
      image: image ? image : AuxImage,
      background_image: background_image ? background_image : AuxImage,
      description,
      released,
      rating,
      platforms,
      genres,
      database_origin: true,
    };
   await videogames.create(newdata);

    //  const newGame = new videogames(newdata);
    //   await newGame.save();

    return `the video game ${newdata.name} was created`;


  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createVideogame,
  getVideogamesID,
  editVideogamesID,
  deleteVideogamesID,
};
