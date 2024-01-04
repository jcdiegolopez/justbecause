// server.js
const express = require('express');
const conectarDB = require('./config/database');
const Usuario = require('./models/usuarioModels');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
conectarDB();

// Ruta para crear un nuevo usuario
app.post(
  '/registrar',
  [
    // Validaciones de entrada
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
  async (req, res) => {
    // Manejo de errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, correo, contrasena, tipo } = req.body;

    try {
      // Verificar si el usuario ya existe
      let usuario = await Usuario.findOne({ correo });
      if (usuario) {
        return res.status(400).json({ msg: 'El usuario ya existe' });
      }

      // Hash de la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(contrasena, salt);

      // Crear nuevo usuario
      usuario = new Usuario({ nombre, correo, contrasena: hashedPassword, tipo });

      await usuario.save();
      res.status(201).json({ msg: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  }
);

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    // Verificar si el usuario existe
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!passwordMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    // Generar token de autenticación
    const token = jwt.sign({ id: usuario._id, correo: usuario.correo }, 'secreto', { expiresIn: '1h' });

    const expirationDate = Math.floor(Date.now() / 1000) + 60 * 60;

    res.status(200).json({ token, user: { _id: usuario._id, nombre: usuario.nombre, correo: usuario.correo, tipo: usuario.tipo }, exp: expirationDate });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
