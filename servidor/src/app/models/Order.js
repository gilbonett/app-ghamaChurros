const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',  /* TODO */
    require: true
  },
  total_price: {
    type: Number,
    minimum: 0,
    require: true
  },
  order_detail: {
    product: {   /* TODO PERGUNTA fazendo a relação dos dados me parece confuso*/
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    require: true,
    },
  quantity: {
    type: Number,
    minimum: 0,
  },
  price: {
    type: Number,
    },
  },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
