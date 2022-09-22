const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    require: true
  },
  total: {
    type: Number,
    minimum: 0,
    require: true
  },
  produtos: [{
    product: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    require: true,
    },
  }],
  amount: {
    type: Number,
    minimum: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
