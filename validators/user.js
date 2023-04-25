const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");




const validatorRegisterItem = [
  check("name", 'el nombre es obligatorio').exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email", 'el emial es obligatorio').exists().notEmpty().isEmail(),
  check("password", 'la contraseña debe ser mayor a 5 caracter').exists().notEmpty().isLength({ min: 5, max: 15 }),
  check("role", 'Este campo de rol es obligatorio').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

module.exports = {
  validatorRegisterItem,
  validatorLogin
}