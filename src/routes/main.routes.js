//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();


//Configuracion de respuestas
router.get('/home', (req, res) => res.send('Esta es la vista de Home'));
router.get('/contact', (req, res) => res.send('Esta es la vista de Contact'));
router.get('/about', (req, res) => res.send('Esta es la vista sobre Nosotros'));
router.get('/faqs', (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'));

//Exporto la funcion

module.exports = router;