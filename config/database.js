const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: "82.148.30.62:3306",
    dialect: "mysql"
});

db.sync();

module.exports = db;

