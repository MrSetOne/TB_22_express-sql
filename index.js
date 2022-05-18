// Importacion y ejecucion de express
const express = require('express');
const app = express();
app.use(express.json());

// Importacion y ejecucion de logger
const logger = require('./logger')

// Importacion y ejecucion de cors
const cors = require('cors');
app.use(cors());

// Importacion de las rutas, esto sirve para indicarle a express que ruta va a tomar
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));

// Seleccionamos el puerto sobre el que vamos a levantar el servidor
const port = 6969;

app.listen(port, () => {
    logger.informer.log(`El servidor ha sido levantado en el puerto ${port}`);
    logger.succes.log(`La direccion de la API es: http://localhost:${port}`)
})