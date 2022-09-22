const express = require('express');

const User = require ('../app/models/User')

const router = express.Router();

router.post('/cadastro', async (req, res) => {
    try {
      const user = await User.create({ ...req.body, user: req.userId});
  
      return res.send({ user });
      
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new user' });
    }
  });

  module.exports = app => app.use('/user', router);