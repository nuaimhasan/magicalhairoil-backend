const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderid: {
      type: String,
    },
    name: {
      type: String,
      allowNull: false,
    },
    phone: {
      type: String,
      allowNull: false,
    },
    quantity: {
      type: Number,
      allowNull: false,
    },
    shipping: {
      type: Number,
      allowNull: false,
    },
    total: {
      type: Number,
      allowNull: false,
    },
    city: {
      type: String,
      allowNull: false,
    },
    address: {
      type: String,
      allowNull: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
