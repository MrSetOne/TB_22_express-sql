// Importamos express ya que mas adelante necesitaremos su metodo .Router
const express = require('express');

// Nos traemos el controlador que necesitamos para poder acceder a sus metodos
const ProductController = require('../controllers/ProductController')

// Generamos el metodo .Router de express para poder enrutar
const router = express.Router();

// Generamos rutas enlazadas con sus respectivos metodos de su controller
router.post('/createTable', ProductController.createTable);
router.post('/add', ProductController.add);
router.post('/updateById/:id', ProductController.updateById); //! No he logrado que funcione con .put
router.post('/getAll', ProductController.getAll); //! No he logrado que funcione con el .get
router.post('/getCategories', ProductController.getCategories); //! No he logrado que funcione con el .get

//TODO seleccionar producto por ID
//TODO mostrar productos forma descendiente
//TODO buscar producto por su nombre
//TODO eliminar producto por id


// Exportamos el modulo para poder utilizarlo en el index
module.exports = router