const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
    status: {
      type: Boolean,
      default: true,
    },
});

module.exports = mongoose.model("products", Product);
