// config/jwt.js
const jwt = require('jsonwebtoken');

const generarToken = (usuario) => {
  return jwt.sign(
    { id: usuario._id, correo: usuario.correo },
    'tu-secreto',
    { expiresIn: '1h' }
  );
};

module.exports = generarToken;
