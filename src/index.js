require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const path = require('path');
// Db connection
const { mongoose } = require('./database2');

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',"*"); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// settings configuracion
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()) 

//Routes
app.use(require("./routes/index.js"));

//start server
app.listen(app.get('port'), () =>{ 
    console.log(`videogames-app listening on port ${app.get('port')}`);
});

