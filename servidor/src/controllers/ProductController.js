const express = require('express');

const Product = require ('../app/models/Product')

const router = express.Router();



router.get('/', async (req, res) => {
  try {

    const products = await Product.find()

    return res.send({ products })

  } catch (err) {
    return res.status(400).send({ error: 'Erro loading products'})
  }
});

router.get('/:producId', async (req, res) => {
    try {
  
      const product = await Product.findById(req.params.productId).populate('user');
  
      return res.send({ product })
  
    } catch (err) {
      return res.status(400).send({ error: 'Erro loading product'})
    }
  });
  
  
  router.post('/create-product', async (req, res) => {
    try {
      const product = await Product.create({ ...req.body, user: req.userId});
  
      return res.send({ product });
      
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new product' });
    }
  });

  router.put('/:productId', async (req, res) => {
    res.send({ user: req.userId });
  })
  
  router.delete('/:productId', async (req, res) => {
    try {
  
    await Product.findByIdAndRemove(req.params.productId);
  
      return res.send();
  
    } catch (err) {
      return res.status(400).send({ error: 'Erro deleting product'});
    }
  });
  
  
  module.exports = app => app.use('/products', router);
  


   