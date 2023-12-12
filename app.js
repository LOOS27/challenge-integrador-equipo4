//Llamo al módulo de Express
const express = require('express');

// Creo una variable para llamar a variable Express
const app = express();

//Importo todos los Express Routes

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');


//Declaro variable del puerto.
const PORT = 3004;

app.use(express.static('Public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT , () => console.log(`servidor corriendo en http://localhost${PORT}`));