const path = require ('path');
const {getAll , getOne, create, edit, deleteOne} = require('../models/product.model');

module.exports = {
    admin: async (req , res) => {

        const data = await getAll();

        res.render (path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
            data
        });
    },
    createView: (req , res) => {
        res.render (path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Create Item",
        });
    },
    createItem: async (req , res) => {
        //console.log(req.body); Ver lo que trae el body
        console.log(req.file); //Ver lo que trae en imagenes
        //Estructura para cargar a la base de datos de Schema_funkos
        const product_schema = {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: Number(req.body.sku),
            dues: Number(req.body.dues),
            image_front: "products/"+ req.files[0].filename,
            image_back: "products/"+ req.files[1].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence),
        };
        //Envia a la base de datos. Primero crea un array a partir del Objeto product_schema
        //const result = await create([Object.values(product_schema)]);
        await create([Object.values(product_schema)]);
        //console.log("array" + [Object.values(product_schema)]);
        //console.log(result);
        //res.send('Esta es la ruta para agregar un nuevo Item ' + result);
        res.redirect('/admin');
    },
    editView: async (req , res) => {
        const { id } = req.params;
        //const [product] = await getOne(id);
        const [product] = await getOne({ product_id: id });
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Edit Item",
            product
        })
    },
    editItem: async (req,res) => {
        //console.log( "ID: ", req.params);
        //console.log( "Body: ", req.body);
        //console.log( "Files: ", req.files);
        //Revisar si hay imagenes, para no sobreescribir.
        const {id} = req.params;
        const haveImages = req.files.length !== 0;

        const product_schema = haveImages ? {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: Number(req.body.sku),
            dues: Number(req.body.dues),
            image_front:"products/"+ req.files[0].filename,
            image_back: "products/"+ req.files[1].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence),
        } : {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: Number(req.body.sku),
            dues: Number(req.body.dues),
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence),
        };
       const result = await edit (product_schema, {product_id: id});
       console.log(result);
        res.redirect('/shop');
    },
    deleteItem: async (req,res) => {
        const { id } = req.params;
        const deleted = await deleteOne({product_id:id});
        /* Luego armar una vista en el caso de que un item no se elimine.
        if (deleted.error) {
            res.send ('Hubo un error al intentar eliminar item' + id);
        }*/
        //res.send('Quieres borrar el item' + id);
        res.redirect('/admin');
    },
    
}