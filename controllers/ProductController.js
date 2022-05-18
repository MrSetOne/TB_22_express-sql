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
    },
    add(req, res) {
        let sql = `INSERT INTO products (name_product, price) VALUE ('${req.body.name}',${req.body.price});`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log(`Se ha añadido ${req.body.name} correctamente`)
            res.status(201).send(`Se ha añadido ${req.body.name} correctamente`)
        });
    },
    updateById(req, res) {
        let sql = `UPDATE products SET name_product = '${req.body.name}' WHERE id = ${req.params.id};`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log(`Se ha modificado el elemento con id:${req.params.id}, ahora se llama ${req.params.name}`);
            res.status(200).send(`Se ha modificado el elemento con id:${req.params.id}, ahora se llama ${req.body.name}`)
        })
    },
    getAll(req, res) {
        let sql = `SELECT * FROM products`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log('Se ha descargado toda la base de datos de productos');
            res.status(200).send(result)
        })
    },
    getCategories(req, res) {
        let sql = `SELECT 
        products.name_product AS Nombre,
        categories.name_category AS Categoria
        FROM products_has_categories
        INNER JOIN categories ON categories_id = categories.id
        INNER JOIN products ON products_id = products.id;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            logger.succes.log('Se ha descargado la base de datos de juegos con sus categorias');
            res.status(200).send(result)
        })
    }





}


// Aqui está la exportación
module.exports = ProductController