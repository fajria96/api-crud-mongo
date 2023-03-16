import mongoose from "mongoose";

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

export default mongoose.model("products", Product);
