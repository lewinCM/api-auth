const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {

  // leer el header en el token
  const token = req.header('x-token')
  // console.log(token);
  // validando el token
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No tiene acceso autorizado'
    })
  }
  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET)
    req.uid = uid
    next()
    // console.log(uid);
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'el token no es valido'
    })
  }


}

module.exports = {
  validateJWT
}