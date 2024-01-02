const mongoose = require('mongoose');



const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  telefono: String,
  // Otros campos de usuario si los hay
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
