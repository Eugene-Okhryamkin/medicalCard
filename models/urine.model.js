const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class Urine extends Model {};

Urine.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Date: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Code: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    Passport: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Doctor: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
    tableName: "urineanalisys",
    modelName: "analisys"
});

Urine.sync();

module.exports = {
    db, 
    Urine
}    