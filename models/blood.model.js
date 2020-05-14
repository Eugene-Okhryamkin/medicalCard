const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class Blood extends Model {};

Blood.init({
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
    Group: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Rhesus: {
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
    tableName: "bloodanalisys",
    modelName: "analisys"
});

Blood.sync();

module.exports = {
    db, 
    Blood
}    