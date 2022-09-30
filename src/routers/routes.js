const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Videogame } = require("../models/videogames");
const {API, API_KEY} = process.env

router.get("/", (req, res)=>{
res.send("Bienvenidos al back-end");
}) 
const get1= async () =>{
 const resp= await axios(`${API}${API_KEY}`)
   // const resp= await axios(`https://api.rawg.io/api/games?key=20d74c49a01a43f89f269362dfb18fa4`)
    const data = await resp.data.results.map(e =>{
       return{
          id:e.id,
          name: e.name,
          description: e.description,
          background_image:e.background_image,
          genres: e.genres.map(e=>e.name),
          rating: e.rating,   
          plataforms:v.platforms
       } 
    })   
    return data; 
   };
   const infodb= async()=>{
    const getDb = await Videogame.find();
    
    // let aux= []
    
    // getDb.forEach( e=>{
    //    aux.push({
    //       id: e.id,
    //       name:e.name,
    //       description: e.description,
    //       background_image:e.background_image,
    //       genres: e.Genres.map(e=>e=e.name),
    //       rating: e.rating,
    //       plataforms:e.platforms})
    // })
    return getDb
 
 }
 const getVg= async () =>{

 
  let allinfo = Promise.all([get1(),infodb()]).then(
     (resultado) => {
      return [...resultado[0], ...resultado[1]];
     }
   );
  
  return allinfo


  };
  const getQuery = async(name)=>{
  
    const games = await getVg()
  
    const gamesFilt = games.filter(e =>e.name.toString().toLowerCase().includes(name.toLowerCase()));
    if(gamesFilt.length === 0){
       return {message :`no se encontro el videojuego ${name}`}
   } else {
 
       return gamesFilt.slice(0,15) 
   }
   
   
 }
// GET all 
router.get('/videogames', async (req, res) => {

 try {
    const {name} = req.query;  
    
    if (!name) {
      const getTodo = await getVg();
      res.send(getTodo);
    } else {
      const getquery = await getQuery(name);
      res.send(getquery);
    }
  } catch (error) {
    console.log(error);
  }
  });
  
//   // GET all Tasks
//   router.get('/videogames/:id', async (req, res) => {
//     const task = await Task.findById(req.params.id);
//     res.json(task);
//   });
  
//   // ADD a new task
//   router.post('/videogames', async (req, res) => {
//     const { title, description } = req.body;
//     const task = new Task({title, description});
//     await task.save();
//     res.json({status: 'Task Saved'});
//   });
  
//   // UPDATE a new task
//   router.put('/videogames/:id', async (req, res) => {
//     const { title, description } = req.body;
//     const newTask = {title, description};
//     await Task.findByIdAndUpdate(req.params.id, newTask);
//     res.json({status: 'Task Updated'});
//   });
  
//   router.delete('/videogames/:id', async (req, res) => {
//     await Task.findByIdAndRemove(req.params.id);
//     res.json({status: 'Task Deleted'});
//   });
  
module.exports= router;