const { DataTypes, Model } = require("sequelize"); 
const db = require("../config/database");

class Epicrisis extends Model {};

Epicrisis.init({
    idEpicrisis: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Date: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    Passport: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    LinkToFile: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Doctor: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
    tableName: 'epicrisis',
    modelName: "Epicrisis"
});

Epicrisis.sync();

module.exports = {
    db, 
    Epicrisis
}    