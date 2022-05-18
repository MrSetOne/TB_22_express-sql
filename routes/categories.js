// Importamos express ya que mas adelante necesitaremos su metodo .Router
const express = require('express');

// Nos traemos el controlador que necesitamos para poder acceder a sus metodos
const CategoryController = require('../controllers/CategoryController')

// Generamos el metodo .Router de express para poder enrutar
const router = express.Router();

// Generamos rutas enlazadas con sus respectivos metodos de su controller
router.post('/createTable', CategoryController.createTable);
router.post('/add/:name', CategoryController.add);
router.post('/updateById/:id', CategoryController.updateByID); //! No he logrado que funcione con .put
router.post('/getAll', CategoryController.getAll); //! No he logrado que funcione con el .get


//TODO seleccionar categoria por id


// Exportamos el modulo para poder utilizarlo en el index
module.exports = router