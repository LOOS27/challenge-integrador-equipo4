const path = require ('path');

const data  = [
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp"
    }
    ]
module.exports = {
    shop: (req , res) => {
            
        res.render (path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Shop",
            data
        });
    },
    item: (req,res) => {
        // Guarda en variable el id que viene de la request
        const itemId = req.params.id;
        //Filtra dentro de la variable data para encontra el product id que coincida con ItemId (request param)
        const item = data.find(item => item.product_id == itemId);

        res.render (path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Producto",
            item
        });
    },
    addItem: (req,res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req,res) => {
        res.render (path.resolve(__dirname, '../views/shop/carrito.ejs'), {
            title: "Cart",
        });
    },
    addToCart: (req, res) =>  res.send('Esta es la ruta para agregar item al carrito')
}