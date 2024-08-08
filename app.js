const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const puerto = 3000;
//const cors = require("cors");
const TemasController = require("./controllers/TemasController");
const EditorialesController = require("./controllers/EditorialesController");
const AutoresController = require("./controllers/AutoresController");
const LibrosController = require("./controllers/LibrosController");

app.use(express.json());
//app.use(cors());

app.get("/temas", TemasController.indexGet);
app.get("/editoriales", EditorialesController.indexGet);
app.get("/autores", AutoresController.indexGet);
app.get("/libros", LibrosController.indexGet);
app.get("/autores/:id([0-9]+)", AutoresController.itemGet);
app.get("/temas/:id([0-9]+)", TemasController.itemGet);
app.get("/editoriales/:id([0-9]+)", EditorialesController.itemGet);
app.get("/libros/:id([0-9]+)", LibrosController.itemGet);
app.post("/temas", TemasController.addItem);
app.post("/libros", LibrosController.insertPost);
app.put("/libros", LibrosController.libroUpdate);

app.listen(puerto, function () {
  console.log("Servidor ejecutándose en el puerto " + puerto + "");
});
