//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();

//LLamo importar controllers con objeto que contiene el detalle de páginas
const {
    admin , 
    createView , 
    createItem, 
    editView , 
    editItem , 
    deleteItem 
} = require('../controllers/admin.controller');

router.get('/', admin);
router.get('/create', createView);
router.post('/create', createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);



//Exporto la funcion

module.exports = router;