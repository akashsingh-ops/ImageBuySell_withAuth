const { DataTypes } = require("sequelize");
const { createDB } = require("../config/db");

const Order = createDB.define("order", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  productId: DataTypes.INTEGER,
  buyerId: DataTypes.INTEGER,
});

module.exports = Order;
