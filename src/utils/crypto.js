const bcrypt = require("bcrypt");

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};

const comparePassword = (plainPassword, hashedPassword) => {
  if (!plainPassword || !hashedPassword) {
    return false;
  }
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
