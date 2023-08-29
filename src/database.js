const mongoose =require ("mongoose")
require('dotenv').config();
const {
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_CLUSTER,
    MONGODB_DATABASE,
    MONGODB_PORT,
  } = process.env;


//const contactadb= process.env.MONGO_DB
//modulo conect contecta con la instancia
//mongoose.connect(contactadb)
mongoose.connect(
`mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_CLUSTER}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`,
)

const connect = mongoose.connection

connect
//.once("open", ()=>{ console.log("db is conected")})
.then(()=>{ console.log("db is conected")})
.catch((error) => console.error(error));



module.exports = mongoose