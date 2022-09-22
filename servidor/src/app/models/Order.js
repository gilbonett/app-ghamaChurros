const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
  emailorder: {
    type: String,
    require: true
  },
  totalorder: {
    type: Number,
    require: true
  },
  amountorder: {
    type: Number,
  }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
