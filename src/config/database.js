
let { Sequelize, DataTypes } = require("sequelize");

let sequelize = new Sequelize("prueba_node", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
});

async function test(){
    try {
        /*sequelize.authenticate().then(() => {
            console.log('conexion correcta con la BD');            
        })*/
        await sequelize.authenticate();
        console.log('conexion correcta con la BD');
      } catch (error) {
        console.error('Error de conexion:', error);
      }      
}

test();
module.exports = sequelize







// destructuración de datos
/*let usuario = {
    id: 1,
    username: "simon",
    email: "simon@gmail.com",
    password: "45349853f4n9ng89nt4"
}

const { password, id, ...rest } = usuario

console.log(rest);

*/



