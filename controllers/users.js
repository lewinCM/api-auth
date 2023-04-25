const { response } = require("express");
const bcryptjs = require("bcryptjs");
const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");

const registerCtrl = async (req, res = response) => {

  const { email, password, name } = req.body
  try {
    const existEmail = await userModel.findOne({ email })
    if (existEmail) {
      return res.status(400).json({
        ok: false, msg: 'El email ya esta en uso'
      })
    }
    const user = new userModel(req.body)
    // encriptando contraseña 
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    // guardar token
    // jwt
    const savetoken = await tokenSign(user.id)


    await user.save()
    res.send({
      mgs: 'OK, el registro fue creado exitosamente ',
      user,
      savetoken,

    })
  } catch (error) {
    handleHttpError(res, 'Error en el registerCtrl ')
  }


};
const AllUsers = async (req, res = response) => {
  try {
    const users = await userModel.find({}, 'name email role google')
    res.json({
      ok: true,
      users,
      uid: req.uid
    })
  } catch (error) {
    handleHttpError(res, 'Error en el en cargar todos los users ')

  }
};
const UpdateUser = async (req, res = response) => {
  try {

    const uid = req.params.id

    const userDB = await userModel.findById(uid);
    if (!userDB) {
      return res.status(4003).json({
        ok: false,
        msg: 'no existe el user en nuestras bases de dato'
      })
    }


    // actualizacion hacer aqui un utils
    const { password, google, email, ...body } = req.body

    if (userDB.email !== email) {
      const existeEmail = await userModel.findOne({ email })
      if (existeEmail) (
        {
          ok: false,
          msg: 'Ya existe un user con ese email'
        }
      )
    }
    body.email = email
    const userUpdate = await userModel.findByIdAndUpdate(uid, body, { new: true })
    res.send({
      userUpdate
    })
  } catch (error) {
    handleHttpError(res, 'Error en cargar el user con el id  ')

  }
};

const deleteUser = async (req, res = response) => {
  const uid = req.params.id
  try {
    const userDB = await userModel.findById(uid);
    if (!userDB) {
      return res.status(4003).json({
        ok: false,
        msg: 'no existe el user en nuestras bases de dato'
      })
    }
    await userModel.findByIdAndDelete(uid)
    res.send({
      ok: true,
      msg: 'User eliminado'
    })

  } catch (error) {
    handleHttpError(res, 'No existe el user en nuestra base de datos  ')

  }
};





const loginCtrl = async (req, res = response) => {
  const { email, password } = req.body
  try {
    const userDB = await userModel.findOne({ email })
    if (!userDB) {
      return res.status(404).json({
        ok: true,
        mgs: 'el email no es encontrado'
      })
    }

    // verificar contraseña
    const validatePassword = bcryptjs.compareSync(password, userDB.password)
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: 'contraseña no valida'
      })
    }
    // jwt
    const token = await tokenSign(userDB.id)



    res.send({ ok: true, token })
  } catch (error) {
    handleHttpError(res, 'Error al ingresar el user ')

  }
};





module.exports = {
  registerCtrl,
  loginCtrl,
  AllUsers,
  UpdateUser,
  deleteUser
}