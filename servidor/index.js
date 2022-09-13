const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./src/controllers/index')(app)

mongoose
  .connect('mongodb+srv://bonett:toti16@cluster0.nf0wacg.mongodb.net/test')
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))
