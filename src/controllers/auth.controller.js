const path = require ('path');
module.exports = {
    login: (req , res) => {
        res.render (path.resolve(__dirname, '../views/auth/login.ejs'));
    },
    doLogin: (req,res) => res.send('Esta es la ruta que valida los datos de LOGIN'),
    register: (req , res) => {
        res.render (path.resolve(__dirname, '../views/auth/register.ejs'));
    },
    doRegister: (req,res) => res.send('Esta es la ruta que crea un nuevo Usuario'),
    logout: (req,res) => res.send('Esta ruta deslogua o cierra sesión del usuario'),
}