const path = require ('path');
const {getAll , getOne, create} = require('../models/product.model');
module.exports = {
    admin: async (req , res) => {

        const data = await getAll();

        res.render (path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
            data
        });
    },
    createView: (req,res) => {
        res.render (path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Create Item",
        });
    },
    createItem: (req,res) => {
        //console.log(req.body);
        //console.log(req.file);
        //Estructura para cargar a la base de datos de Schema_funkos
        const product_schema = {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            sku: req.body.sku,
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,
            category_id: req.body.category,
            licence_id: req.body.licence,
            dues: req.body.dues,
        }
        //Envia a la base de datos
        const result = await create(product_schema)
        res.send('Esta es la ruta para agregar un nuevo Item', result);
    },
    editView: async (req , res) => {
        const { id } = req.params;
        //const [product] = await getOne(id);
        const [product] = await getOne({product_id: id });
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Edit Item",
            product
        });
    },
    editItem: (req,res) => res.send('Esta es la vista para impactar la edición '),
    deleteItem: (req,res) => res.send('Esta es la vista para ELIMINAR UN ITEM ID'),
    
}