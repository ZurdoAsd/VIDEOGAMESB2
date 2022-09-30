const mongoose =require ("mongoose")
const URI='mongodb://localhost/videogamesAldo'
mongoose.connect(URI)
.then(db=> console.log("db is conected"))
.catch(err => console.log(err));

module.exports = mongoose