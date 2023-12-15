const path = require ('path');
module.exports = {
    admin: (req , res) => {
        res.render (path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
        });
    },
    createView: (req,res) => {
        res.render (path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Create Item",
        });
    },
    createItem: (req,res) => res.send('Esta es la ruta para agregar un nuevo Item'),
    editView: (req,res) => {
        res.render (path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Edit Item",
        });
    },
    editItem: (req,res) => res.send('Esta es la vista para impactar la edición '),
    deleteItem: (req,res) => res.send('Esta es la vista para ELIMINAR UN ITEM ID'),
    
}