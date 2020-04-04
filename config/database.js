const Sequelize = require("sequelize");

const db = new Sequelize("med", "root", "qwe123", {
    host: "localhost",
    dialect: "mysql"
});

db.sync();

module.exports = db;

