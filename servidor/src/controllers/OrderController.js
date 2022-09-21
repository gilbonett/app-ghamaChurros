const express = require('express');

const Order = require ('../app/models/Order')

const router = express.Router();

router.get('/', async (req, res) => {
  try {

    const orders = await Order.find().populate('user');

    return res.send({ orders })

  } catch (err) {
    return res.status(400).send({ error: 'Erro loading orders'})
  }
});

router.get('/:orderId', async (req, res) => {
  try {

    const order = await Order.findById(req.params.orderId).populate('user');

    return res.send({ order })

  } catch (err) {
    return res.status(400).send({ error: 'Erro loading order'})
  }
});

router.post('/create-order', async (req, res) => {
    try {
      const order = await Order.create({ ...req.body, user: req.orderId});
  
      return res.send({ order });
      
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new product' });
    }
  });
  
  router.put('/:orderId', async (req, res) => {
    res.send({ user: req.orderId });
  })
  
  router.delete('/:orderId', async (req, res) => {
    try {
  
    await Order.findByIdAndRemove(req.params.orderId);
  
      return res.send();
  
    } catch (err) {
      return res.status(400).send({ error: 'Erro deleting product'});
    }
  });
  
  
  module.exports = app => app.use('/orders', router);
  