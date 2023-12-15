//LLamar al módulo de My sql 2
const mysql = require('mysql2');


//Crear un pool de conexion
//Las conexiones únicas individuales, crean un sólo canal de conexión. Bloquea lo asincrono
//queueLimit: cantidad de conexiones en espera en 0 son infinita.

const pool = mysql.createPool(
    {
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    database: 'funko_schema',
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

