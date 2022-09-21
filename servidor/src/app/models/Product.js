const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome: {
      type: String,
      require: true,
    },
    descricao: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    amount: {
      type: Number,
      require:true
    },
  });
  
  const Product = mongoose.model('product', ProductSchema);
  module.exports = Product;
  