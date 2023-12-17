//Multer middleware para manipulación de archivos, por ejemplo imagenes
const multer = require('multer');
const path = require ('path');

/*1- Multer- Configuración de multer*/
const storage = multer.diskStorage({
    //Ambas propiedades reciben un callback
    //Donde quiero guardar la imagen. Request / archivo de request y callback
    destination: (req, file, cb) =>cb(null, path.resolve(__dirname, '../../public/img/products')),
    //Nombre del archivo. Agregando fecha. ${Date.now()} toma la fecha, función de Javascript y por parametro recibe el objeto file con la propiedad original name.
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

/*2- Multer - llamar a la configuración de Multer*/
const upload = multer({storage});

module.exports = upload;