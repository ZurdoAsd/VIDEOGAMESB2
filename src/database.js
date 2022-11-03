const mongoose =require ("mongoose")

const contactadb= process.env.MONGO_DB
//modulo conect contecta con la instancia
mongoose.connect(contactadb)

const connect = mongoose.connection

connect.once("open", ()=>{ console.log("db is conected")})


module.exports = mongoose