const express = require('express');
const conectarDB = require('./config/database');
const Usuario = require('./models/usuarioModels');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

conectarDB(); // Conectar a la base de datos

// Ruta para crear un nuevo usuario
app.post(
  '/registrar',
  [
    // Validaciones de entrada
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Ingrese un correo electrónico válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('tipo', 'El tipo debe ser "cliente" o "administrador"').isIn(['cliente', 'administrador']),
  ],
  async (req, res) => {
    // Manejo de errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, email, password, tipo } = req.body;

    try {
      // Verificar si el usuario ya existe
      let usuario = await Usuario.findOne({ email });
      if (usuario) {
        return res.status(400).json({ msg: 'El usuario ya existe' });
      }

      // Hash de la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Crear nuevo usuario
      usuario = new Usuario({ nombre, email, password: hashedPassword, tipo });

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
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!passwordMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    // Aquí podrías generar y devolver un token de autenticación si lo necesitas

    res.status(200).json({ msg: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
