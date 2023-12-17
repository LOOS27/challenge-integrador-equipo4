const path = require ('path');
//Trae el método get all
const { getAll , getOne } = require('../models/product.model');

const json  = [
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
    shop: async (req , res) => {
        const data = await getAll();
        //console.log(dbdata);
        //En product model se configuró un return para atrapar errores, desde el if se evalua si hay o no error en la base.
        /*if(dbdata.error) {

        } else {
            res.render (path.resolve(__dirname, '../views/shop/shop.ejs'), {
                title: "Shop",
                data
            });
        }*/
        res.render (path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Shop",
            data
    });
    },
    item: async (req,res) => {
        // Guarda en variable el id que viene de la request
        const itemId = req.params.id;
        /*Filtra dentro de la variable data para encontra el product id que coincida con ItemId (request param)
        const item = data.find(item => item.product_id == itemId);*/
        const [item ] = await getOne({product_id: itemId});

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