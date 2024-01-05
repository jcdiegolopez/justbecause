// controllers/authController.js
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuarioModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('../config/passport');
const generarToken = require('../config/jwt');

// Registro normal
exports.registrarUsuario = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre, correo, contrasena, tipo } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });

    if (usuario) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    usuario = new Usuario({ nombre, correo, contrasena: hashedPassword, tipo });

    await usuario.save();
    res.status(201).json({ msg: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Inicio de sesión normal
exports.iniciarSesion = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }

    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!passwordMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const token = generarToken(usuario);

    const expirationDate = Math.floor(Date.now() / 1000) + 60 * 60;

    res.status(200).json({
      token,
      user: { _id: usuario._id, nombre: usuario.nombre, correo: usuario.correo, tipo: usuario.tipo },
      exp: expirationDate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Autenticación con Google
exports.iniciarSesionConGoogle = passport.authenticate("google", ["profile", "email"]);

exports.iniciarSesionConGoogleCallback = (req, res, next) => {
  passport.authenticate('google', async (err, usuario, info) => {
    if (err) {
      return res.status(500).json({ msg: 'Error interno del servidor'. err });
    }

    if (!usuario) {
      return res.status(400).json({ msg: 'Error al autenticar con Google' });
    }

    try {
      // Generar token JWT
      const token = generarToken(usuario);

      // Obtener la fecha de expiración del token
      const expirationDate = Math.floor(Date.now() / 1000) + 60 * 60;

      // Enviar respuesta JSON con el token, usuario y fecha de expiración
  
      res.redirect(`http://localhost:5173/login?token=${token}&userId=${usuario._id}&userName=${usuario.nombre}&userEmail=${usuario.correo}&userType=${usuario.tipo}&exp=${expirationDate}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error interno del servidor' });
    }
  })(req, res, next);
};

