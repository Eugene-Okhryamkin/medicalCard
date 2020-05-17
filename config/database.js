const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql"
});

db.sync();

module.exports = db;

