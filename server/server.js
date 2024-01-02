// server/server.js
const express = require('express');
const conectarDB = require('./config/database');
const Usuario = require('./models/usuarioModels');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

conectarDB(); // Conectar a la base de datos

// Ruta para crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
