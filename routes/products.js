// Importamos express ya que mas adelante necesitaremos su metodo .Router
const express = require('express');

// Nos traemos el controlador que necesitamos para poder acceder a sus metodos
const ProductController = require('../controllers/ProductController')

// Generamos el metodo .Router de express para poder enrutar
const router = express.Router();

// Generamos rutas enlazadas con sus respectivos metodos de su controller
router.post('/createTable', ProductController.createTable);
router.post('/add', ProductController.add);
router.put('/updateById/:id', ProductController.updateById);
router.get('/getAll', ProductController.getAll);
router.get('/getCategories', ProductController.getCategories);

//TODO seleccionar producto por ID
//TODO mostrar productos forma descendiente
//TODO buscar producto por su nombre
//TODO eliminar producto por id


// Exportamos el modulo para poder utilizarlo en el index
module.exports = router