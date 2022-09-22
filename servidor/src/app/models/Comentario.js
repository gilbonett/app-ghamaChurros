const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    usuario: {
      type: String,
      require: true,
    },
    comentario: {
      type: String,
      require: true,
    },
  });
  
  const Comentario = mongoose.model('comentario', ComentarioSchema);
  module.exports = Comentario;
  