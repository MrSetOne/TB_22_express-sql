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
    },
    add(req, res) {
        let sql = `INSERT INTO categories (name_category) VALUE ('${req.params.name}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log(`Se ha añadido ${req.params.name} correctamente`)
            res.status(201).send(`Se ha añadido ${req.params.name} correctamente`)
        });
    },
    updateByID(req, res) {
        let sql = `UPDATE categories SET name_category = '${req.body.name}' WHERE id = ${req.params.id};`;
        console.log(sql);
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(err);
            logger.succes.log(`Se ha modificado el elemento con id:${req.params.id}, ahora se llama ${req.body.name}`);
            res.status(200).send(`Se ha modificado el elemento con id:${req.params.id}, ahora se llama ${req.body.name}`)
        })
    },
    getAll(req, res) {
        let sql = `SELECT * FROM categories`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log('Se ha descargado toda la base de datos de categorias');
            res.status(200).send(result)
        })
    }

}


// Aqui está la exportación
module.exports = CategoryController