// aqui creo mi servidor.
const express = require("express");
// morgan middleware
const morgan = require("morgan");
// middleware cors
const cors = require("cors");
// mi router:
const mainRouter = require("./routes");

const app = express();
// // midleware cors
app.use(cors());
// middleware morgan
app.use(morgan("dev"));
// middleware para usar json
app.use(express.json());

// definir las rutas
app.use(mainRouter);

// no olvidar la s en "exports"
module.exports = app;