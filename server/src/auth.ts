import passport from "koa-passport";
import bcrypt from "bcryptjs";
import * as passportLocal from "passport-local";

import User from "./models/User";

const LocalStrategy = passportLocal.Strategy;
const options = {};

function comparePass(databasePassword: any, userPassword: any) {
  return bcrypt.compareSync(databasePassword, userPassword);
}

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user) return done(null, false);
        if (comparePass(password, user.getDataValue("password"))) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        return done(err);
      });
  })
);
