// Importamos el modulo mysql
const mysql = require('mysql2');

// Conectamos con el servidor
const db = mysql.createConnection({
    host: 'your host',
    user: 'your user',
    password: 'your password',
    database: 'your database'
});

module.exports = db;