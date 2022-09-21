const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    amount: {
      type: Number,
    },
  });
  
  const Product = mongoose.model('product', ProductSchema);
  module.exports = Product;
  