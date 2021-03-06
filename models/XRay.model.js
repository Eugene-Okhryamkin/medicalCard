const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class XRay extends Model {};

XRay.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Code: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    Date: {
        type: DataTypes.STRING(45),
        allowNull: false
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
    tableName: "xray",
    modelName: "analisys",
});

XRay.sync();

module.exports = {
    db, 
    XRay
}    