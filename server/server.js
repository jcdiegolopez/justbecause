// server.js
const express = require('express');
const conectarDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const passport = require('passport');
const passportStrategy = require("./config/passport");


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
conectarDB();
app.use(passport.initialize());
app.use(cors())
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
