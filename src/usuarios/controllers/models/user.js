const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');


class Usuario extends Model {

}

Usuario.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    sequelize: connection,
    modelName: 'users'
})

Usuario.sync().then(()=>{
    console.log("Usuário sincronizado")
    console.log(Usuario)

})
.catch((e) =>{
console.log("Usuário não sincronizado: ", e)
})

module.exports = Usuario