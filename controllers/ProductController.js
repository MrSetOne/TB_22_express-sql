// Importamos la base de datos
const db = require('../config/database.js')

// Importamos el logger
const logger = require('../logger')

// Esto es la libreria de metodos que pasara la funcion a las rutas
const ProductController = {
    createTable(req, res) {
        let sql = `CREATE TABLE IF NOT EXISTS products(
            id INT AUTO_INCREMENT,
            name_product VARCHAR(50),
            price INT,
            PRIMARY KEY(id));`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log('La tabla "products" se ha creado correctamente');
            res.send('La tabla fue creada con exito')
        })
    }


    //TODO Aqui dentro van los metodos a ejecutar



}


// Aqui está la exportación
module.exports = ProductController