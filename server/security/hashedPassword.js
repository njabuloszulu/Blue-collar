const { poolPromise } = require("../connection/DB");
const bcrypt = require("bcrypt");

const hashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(password, salt);
    return hasPassword;
  } catch (error) {
    return error;
  }
};

module.exports = { hashedPassword };
