const { Sequelize } = require("sequelize");
// create db
const createDB = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

// functio for connect db
const connectDB = () => {
  createDB
    .sync()
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log("db coonection failed.....", e);
    });
};
module.exports = { createDB, connectDB };
const userModels = require("../models/orderModels");
const orderModels = require("../models/orderModels");

orderModels.belongsTo(userModels, { foreignKey: "buyerId" });
userModels.hasMany(orderModels, { foreignKey: "id" });
