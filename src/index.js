require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const {mongoose} = require('./database');

// settings configuracion
app.set('port', process.env.PORT || 3001);

// middlewares
// mensaje con formato de texto 
app.use(morgan('dev'));
//metodo json -- cada q lleg aun dato al server .. va a ocmprobar si es formto json 
app.use(express.json())

//Routes
app.use(require("./routers/routes.js"));
app.use("/prueba",require("./routers/routesss"));

//static files -- donde van los archivos staticos -- public --
app.use("/prueba2",express.static(path.join(__dirname, "public")))





//start server
app.listen(app.get('port'), () =>{ 
    console.log(`listening on port ${app.get('port')}`);
});
