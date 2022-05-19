// Importamos express ya que mas adelante necesitaremos su metodo .Router
const express = require('express');

// Nos traemos el controlador que necesitamos para poder acceder a sus metodos
const CategoryController = require('../controllers/CategoryController')

// Generamos el metodo .Router de express para poder enrutar
const router = express.Router();

// Generamos rutas enlazadas con sus respectivos metodos de su controller
router.post('/createTable', CategoryController.createTable);
router.post('/add/:name', CategoryController.add);
router.put('/updateById/:id', CategoryController.updateByID);
router.get('/getAll', CategoryController.getAll);
router.get('/getById/:id', CategoryController.getById);

// Exportamos el modulo para poder utilizarlo en el index
module.exports = router