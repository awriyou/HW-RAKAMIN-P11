const Sequelize = require("sequelize");
const db = new Sequelize("P11", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
