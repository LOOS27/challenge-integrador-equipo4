//Llamo al módulo de Express
const express = require('express');

// Creo una variable para llamar a variable Express
const app = express();

//Declaro variable del puerto.
const PORT = 3004;

app.use(express.static('Public'));

app.listen(PORT , () => console.log(`servidor corriendo en http://localhost${PORT}`));