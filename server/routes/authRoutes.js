// routes/authRoutes.js
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { registrarUsuario, iniciarSesion, iniciarSesionConGoogle,iniciarSesionConGoogleCallback } = require('../controllers/authController');

router.post(
  '/registrar',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'Ingrese un correo electrónico válido').isEmail(),
    check('contrasena', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('confirmPassword', 'Las contraseñas no coinciden').custom((value, { req }) => {
      if (value !== req.body.contrasena) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }),
    check('tipo', 'El tipo debe ser "cliente" o "administrador"').isIn(['cliente', 'administrador']),
  ],
  registrarUsuario
);

router.post(
  '/login',
  [
    check('correo', 'Ingrese un correo electrónico válido').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').exists(),
  ],
  iniciarSesion
);

// Rutas para autenticación con Google
router.get('/google', iniciarSesionConGoogle);
router.get('/google/callback', iniciarSesionConGoogleCallback);

module.exports = router;
