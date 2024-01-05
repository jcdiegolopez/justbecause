// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Usuario = require('../models/usuarioModels');
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let usuario = await Usuario.findOne({ googleId: profile.id });

        if (usuario) {
          return done(null, usuario);
        }

        usuario = new Usuario({
          googleId: profile.id,
          nombre: profile.displayName,
          correo: profile.emails[0].value,
          tipo: 'cliente',
        });

        await usuario.save();
        done(null, usuario);
      } catch (error) {
        console.error('Error en la estrategia de Google:', error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const usuario = await Usuario.findById(id);
    done(null, usuario);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
