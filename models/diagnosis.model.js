const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class Diagnosis extends Model {};

Diagnosis.init({
    idDiagnosis: {
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
    codeOfSic: {
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
    tableName: 'diagnosis',
    modelName: "Diagnosis"
})

Diagnosis.sync();

module.exports = {
    db, 
    Diagnosis
}    