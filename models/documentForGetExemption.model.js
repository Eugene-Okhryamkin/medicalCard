const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class DocumentForGetExemption extends Model {};

DocumentForGetExemption.init({
    idDocumentForGetExemption: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Num: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    Date: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    PayedBy: {
        type: DataTypes.STRING(65),
        allowNull: false
    },
    Passport: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
    tableName: "documentForGetExemption",
    modelName: "DocumentForGetExemption"
})

DocumentForGetExemption.sync();

module.exports = {
    db,
    DocumentForGetExemption
}