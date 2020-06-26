const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.prt,
    dialect: "mysql"
});

db.sync();

module.exports = db;

