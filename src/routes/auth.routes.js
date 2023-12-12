//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();

router.get('/login', (req,res) => res.send('Esta es la vista de LOGIN'));
router.post('/login', (req,res) => res.send('Esta es la ruta que valida los datos de LOGIN'));
router.get('/register', (req,res) => res.send('Esta es la vista de Register'));
router.post('/register', (req,res) => res.send('Esta es la ruta que crea un nuevo Usuario'));
router.get('/logut', (req,res) => res.send('Esta ruta deslogua o cierra sesión del usuario'));


//Exporto la funcion

module.exports = router;