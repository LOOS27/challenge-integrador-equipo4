const { conn } = require('../config/conn');

//Ir a la base de datos traer los productos y devolverlos
// Conexión asincrona

//1- Trae toda la tabla
const getAll = async () => {
 //const data = await conn.query('SELECT * FROM product;'); Devuelve elementos en un array. La estructura de la tabla y los productos.
 //Solo necesito los productos entonces:
 try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
    return rows;
 } catch (error) {
    //throw error;
    //console.log('Hemos encontrado un error: ' + error);
    return {
        error: true,
        message: 'Hemos encontrado un error' + error,
    }
 } finally {
    //Para liberar la conexión
    conn.releaseConnection();
 }
}

//2 Trae un elemento
const getOne = async (param) => {
   try {
      //? espera un valor y por parametro solo se pasa ese valor
      //const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?;' , id);
      //const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id = ?;', id);
      const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
      return rows;
   } catch (error) {
      //throw error;
      //console.log('Hemos encontrado un error: ' + error);
      return {
          error: true,
          message: 'Hemos encontrado un error' + error,
      }
   } finally {
      //Para liberar la conexión
      conn.releaseConnection();
   }

}
//Cargar producto 
const create = async(params) => {
   try {
      const [product] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
      return product;
   } catch (error) {
      //throw error;
      //console.log('Hemos encontrado un error: ' + error);
      return {
          error: true,
          message: 'Hemos encontrado un error' + error,
      }
   } finally {
      //Para liberar la conexión
      conn.releaseConnection();
   }
   
}
//Cargar producto 
const edit = async(params , id) => {
   try {
      const [product] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id] );
      return product;
   } catch (error) {
      //throw error;
      //console.log('Hemos encontrado un error: ' + error);
      return {
          error: true,
          message: 'Hemos encontrado un error' + error,
      }
   } finally {
      //Para liberar la conexión
      conn.releaseConnection();
   }
   
}

//Eliminar producto 
const deleteOne = async(params) => {
   try {
      const [product] = await conn.query('DELETE FROM product WHERE ?', params);
      return product;
   } catch (error) {
      //throw error;
      //console.log('Hemos encontrado un error: ' + error);
      return {
          error: true,
          message: 'Hemos encontrado un error' + error,
      }
   } finally {
      //Para liberar la conexión
      conn.releaseConnection();
   }
   
}

module.exports = {
    getAll,
    getOne,
    create,
    edit,
    deleteOne
}

/*Ver productos*/
/*Crear*/
/*Borrar*/
/*MOdificar*/
/*Consultar todo o consultar uno*/
