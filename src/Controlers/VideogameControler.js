const { getForQuery, getAllGames } = require("../Services/GETvideogames");
const {
  getVideogamesID,
  editVideogamesID,
  deleteVideogamesID,
  createVideogame,
} = require("../Services/IDvideogames");

const getallVideogames = async (req, res) => {
  try {
    const { name } = req.query;
    const AllVideogames = await getAllGames();

    if (name) {
      const getquery = getForQuery(name, AllVideogames);
      getquery.length
        ? res.status(200).json(getquery)
        : res.status(404).json("no existe el juego");
    } else {
      const AllVideogamesSorted = AllVideogames.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
      res.status(200).send(AllVideogamesSorted);
    }
  } catch (error) {
    console.log(error);
  }
};

const getIDlVideogames = async (req, res) => {
  const { id } = req.params;
  try {
    const getforid = await getVideogamesID(id);

    getforid
      ? res.status(200).json(getforid)
      : res.status(404).json({
          msg: `the videogame with id ${id}  does not exist on this site`,
        });
  } catch (error) {
    console.log(error);
  }
};

const createVideogames = async (req, res) => {
  try {
    const data = req.body;
    const newGame = await createVideogame(data);
    res.status(200).json(newGame);
  } catch (error) {
    console.log(error);
  }
};

const putVideogames = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const update = await editVideogamesID(data, id);
    update
      ? res.status(200).json(update)
      : res.status(404).json({
          msg: `the videogame with id ${id}  does not exist on this site`,
        });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteVideogames = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteGame = await deleteVideogamesID(id);

    deleteGame
      ? res.status(200).json(deleteGame)
      : res.status(404).json({
          msg: `the videogame with id ${id}  does not exist on this site`,
        });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getallVideogames,
  getIDlVideogames,
  putVideogames,
  deleteVideogames,
  createVideogames,
};
