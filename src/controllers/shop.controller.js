const path = require ('path');
module.exports = {
    shop: (req , res) => {
        res.render (path.resolve(__dirname, '../views/shop/shop.ejs'));
    },
    item: (req,res) => {
        res.render (path.resolve(__dirname, '../views/shop/item.ejs'));
    },
    addItem: (req,res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req,res) => {
        res.render (path.resolve(__dirname, '../views/shop/carrito.ejs'));
    },
    addToCart: (req, res) =>  res.send('Esta es la ruta para agregar item al carrito')
}