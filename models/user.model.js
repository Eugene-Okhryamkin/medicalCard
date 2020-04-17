const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class User extends Model {};

User.init({
    idpacient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    OMC: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    CodeOfExemption: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SNILS: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MiddleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveRegion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveSettlement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveNeighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveHouse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveHousing: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LiveAppartment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayRegion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StaySettlement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayNeighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayHouse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayHousing: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StayAppartment: {
        type: DataTypes.STRING,
        allowNull: false
    },

    HomePhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PlaceOfWork: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Proffession: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Dependant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Passport: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RightToPreferentialService: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Disability: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
    tableName: 'pacients',
    modelName: "User"
});

User.sync();

module.exports = {
    db, 
    User
}    