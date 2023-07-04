const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');


class propertiesPermissions extends Model {

}

propertiesPermissions.init({
    id_usuario: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true
    },
    propertyPermission: {
        type: DataTypes.STRING,
        primaryKey: true,
    }

}, {
    sequelize: connection,
    modelName: 'propertiesPermissions'
})

propertiesPermissions.sync().then(() => {
    console.log("permissão de propriedade sincronizada")
    console.log(propertiesPermissions)

})
    .catch((e) => {
        console.log("Permissão de propriedade não sincronizado: ", e)
    })

module.exports = propertiesPermissions;