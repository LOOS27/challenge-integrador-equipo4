//Configurar Express Router

//LLamo a modulo Express
const express = require('express');

//Traigo el objeto Router
const router = express.Router();

//Traigo la configuración del middleware Multer para la gestión de archivos.
const upload = require('../middlewares/uploadFiles');


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
//Para create hay que pasar el middleware y poder manipular archivos. 
//Se selecciona upload.array porque el input file esta configurado para multiple archivos.
// Upload. arrat recibe dos parametros: el name del input file y la cantidad de archivos
//Antes de pasar por el controlador hay que subir los archivos
router.post('/create', upload.array('images', 2 ), createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', upload.array('images', 2), editItem);
router.delete('/delete/:id', deleteItem);



//Exporto la funcion

module.exports = router;