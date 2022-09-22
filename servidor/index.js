const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const cors = require('cors')
 
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./src/controllers/index')(app)

mongoose
  .connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(8000)
  })
  .catch((err) => console.log(err))
