//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();

router.get('/', (req,res) => res.send('Esta es la vista de Admin'));
router.get('/create', (req,res) => res.send('Esta es la vista para Crear un nuevo Item'));
router.post('/create', (req,res) => res.send('Esta es la ruta para agregar un nuevo Item'));
router.get('/edit/:id', (req,res) => res.send('Esta es la vista para Editar un Item'));
router.put('/edit/:id', (req,res) => res.send('Esta es la vista para impactar la edición '));
router.delete('/delete/:id', (req,res) => res.send('Esta es la vista para ELIMINAR UN ITEM ID'));



//Exporto la funcion

module.exports = router;