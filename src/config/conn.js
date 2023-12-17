//LLamar al módulo de My sql 2
const mysql = require('mysql2');
require('dotenv').config();


//Crear un pool de conexion
//Las conexiones únicas individuales, crean un sólo canal de conexión. Bloquea lo asincrono
//queueLimit: cantidad de conexiones en espera en 0 son infinita.

const pool = mysql.createPool(
    {
    user: process.env.DBUSER,
    password: '',
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    }
);

pool.getConnection ((err, conn)=>{
    if(err) {
        console.log('hubo un error' + err);
    } else {
        console.log('Conexión a la Base de Datos exitosa');
        conn.release();
    }
})

module.exports = {
    conn: pool.promise()
}

