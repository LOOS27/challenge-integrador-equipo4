//Configurar Express Router

//LLamo a modulo Express
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

//Traingo el objeto Router
const router = express.Router();

//Hacer destructuring de un objeto
const {
    shop, 
    item, 
    addItem, 
    cart , 
    addToCart
} 
= require('../controllers/shop.controller');

router.get('/', shop);
router.get('/item/:id', item );
router.post('/item/:id/add', addItem);
router.get('/cart', cart );
router.post('/cart', addToCart );


//Exporto la funcion

module.exports = router;