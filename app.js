//Llamo al módulo de Express
const express = require('express');

// Creo una variable para llamar a variable Express
const app = express();

//Traer modulo path para solucionar la búsqueda de rutas de documentos, imagenes, etc
const path = require('path');

/*LLamo al módulo MethodOverride para manejar la información
 que llega a través de método Post*/

 const MethodOverride = require('method-override');


//Importo todos los Express Routes

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');


//Declaro variable del puerto.
const PORT = 3004;

//Configurar Ejs
app.set('view engine','ejs');
//Declarar la ruta de las views
//se usa join y no resolve porque como este archivo esta antes que la carpeta entonces ingresa directamente.
app.set('views', path.join(__dirname, './src/views'));

/*Para que cuando se envia por Post la información la traduzca a lenguaje Javascript*/
app.use(express.urlencoded());
app.use(express.json());

/*Desde el formulario puede enviar una peticion distinta de Post. Para usar method override para method put y delete*/
app.use(MethodOverride('_method'));

app.use(express.static('Public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT , () => console.log(`servidor corriendo en http://localhost${PORT}`));