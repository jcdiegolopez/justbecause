// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protegerRuta = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, 'tu-secreto');
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido.' });
  }
};

module.exports = protegerRuta;
