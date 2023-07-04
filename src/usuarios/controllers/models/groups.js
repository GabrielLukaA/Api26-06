const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');


class groups extends Model {

}

groups.init({
    id_usuario: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true
    },
    groups: {
        type: DataTypes.STRING,
        primaryKey: true,
    }

}, {
    sequelize: connection,
    modelName: 'groups'
})

groups.sync().then(() => {
    console.log("groups sincronizada")
    console.log(groups)

})
    .catch((e) => {
        console.log("groups não sincronizado: ", e)
    })

module.exports = groups;