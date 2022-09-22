const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    senha: {
      type: String,
      require: true,
    },
  });
  
  const User = mongoose.model('user', UserSchema);
  module.exports = User;
  