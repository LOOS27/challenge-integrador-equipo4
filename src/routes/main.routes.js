//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();

//LLamo importar controllers con objeto que contiene el detalle de páginas
const controller = require('../controllers/main.controller');

//Configuracion de respuestas
router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faqs', controller.faqs);

//Exporto la funcion

module.exports = router;