const mongoose = require('mongoose');

const direccionSchema = new mongoose.Schema({
  tipo: String,
  calle: String,
  ciudad: String,
  estado: String,
  codigoPostal: String,
});

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
  direcciones: [direccionSchema],
  // Otros campos de usuario si los hay
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
