const { ExtractJwt, Strategy } = require("passport-jwt");
const passport = require("passport");

const { findUserById } = require("../users/users.controllers");

const passportConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "academlo",
};

passport.use(
  new Strategy(passportConfig, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
      .then((data) => {
        if (data) {
          done(null, tokenDecoded);
        } else {
          done(null, false);
        }
      })
      .catch((error) => {
        done(error, false);
      });
  })
);

const authMiddleware = passport.authenticate("jwt", { session: false });
