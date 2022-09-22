const mongoose = require("mongoose");


const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required:true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    require:true,
  },
});


const Item = mongoose.model('products', ItemSchema);
module.exports = Item;
