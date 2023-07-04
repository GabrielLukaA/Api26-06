const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');


class cardPermissions extends Model {

}

cardPermissions.init({
    id_usuario: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true
    },
    permission: {
        type: DataTypes.STRING,
        primaryKey: true,
    }
    
},{
    sequelize: connection,
    modelName: 'cardPermissions'
})

cardPermissions.sync().then(()=>{
    console.log("permissão sincronizada")
    console.log(cardPermissions)

})
.catch((e) =>{
console.log("Permissão não sincronizado: ", e)
})

module.exports = cardPermissions;