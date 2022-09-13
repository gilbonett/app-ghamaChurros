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
    category: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    comprador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Product = mongoose.model('product', ProductSchema);
  module.exports = Food;
  