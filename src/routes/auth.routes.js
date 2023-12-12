//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traingo el objeto Router
const router = express.Router();

//LLamo importar controllers con objeto que contiene el detalle de páginas
const {
    login,
    doLogin,
    register,
    doRegister,
    logout
} = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/login',doLogin );
router.get('/register', register);
router.post('/register', doRegister );
router.get('/logut', logout);


//Exporto la funcion

module.exports = router;