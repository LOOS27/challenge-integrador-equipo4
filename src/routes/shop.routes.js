//Configurar Express Router

//LLamo a modulo Express
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

//Traingo el objeto Router
const router = express.Router();

router.get('/', (req,res) => res.send('Esta es la vista de Shop'));
router.get('/item/:id', (req,res) => res.send('Esta es la vista del Item seleccionado'));
router.post('/item/:id/add', (req,res) => res.send('Esta es la ruta para agregar un nuevo item'));
router.get('/cart', (req, res) =>  res.send('Esta es la vista del Carrito'));
router.post('/cart', (req, res) =>  res.send('Esta es la ruta para agregar item al carrito'));


//Exporto la funcion

module.exports = router;