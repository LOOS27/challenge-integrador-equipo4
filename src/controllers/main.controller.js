const res = require('express/lib/response');

module.exports = {
    //home: (req, res) => res.send('Esta es la vista de Home'),
    home:(req , res) => {
        res.render('index', {
            title: "Home",
        });
    },
    contact: (req, res) => res.send('Esta es la vista de Contact'),
    about: (req, res) => res.send('Esta es la vista sobre Nosotros'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes')
}