const express = require('express');

const Comentario = require ('../app/models/Comentario')

const router = express.Router();




router.post('/create', async (req, res) => {
    try {
      const comentario = await Comentario.create({ ...req.body, user: req.userId});
  
      return res.send({ comentario });
      
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new comment' });
    }
  });


  router.get('/todos', async (req, res) => {
    try {
  
      const comentario = await Comentario.find()
           res.json( comentario )
  
    } catch (err) {
      return res.status(400).send({ error: 'Erro loading comments'})
    }
  }); 

  module.exports = app => app.use('/comment', router);