const sequelize = require("./../config/database")


// definir models
const Usuario = sequelize.define("Usuario", {
    estado: DataTypes.INTEGER,
    correo: {
        type: DataTypes.STRING(200),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    clave: DataTypes.STRING(50)
});

const Categoria = sequelize.define("Categoria", {
    nombre: DataTypes.STRING(200),
    descripcion: DataTypes.TEXT
},{
    freezeTableName: "micategoria",
    timestamps: false
});

//Usuario.sync(); // migrar 
//Categoria.sync();

module.exports = {
    Usuario,
    Categoria
}
