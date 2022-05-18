// Importamos la base de datos
const db = require('../config/database.js')

// Importamos logger
const logger = require('../logger')


// Esto es la libreria de metodos que pasara la funcion a las rutas
const CategoryController = {
    createTable(req, res) {
        let sql = `CREATE TABLE IF NOT EXISTS categories(
            id INT AUTO_INCREMENT,
            name_category VARCHAR(50),
            PRIMARY KEY(id));`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log('La tabla "categories" se ha creado correctamente');
            res.send('La tabla de categorias fue creada con exito')
        })
    }


    //TODO Aqui dentro van los metodos a ejecutar

}


// Aqui está la exportación
module.exports = CategoryController