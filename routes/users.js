const { Router } = require("express");
const { registerCtrl, loginCtrl, AllUsers, UpdateUser, deleteUser } = require("../controllers/users");
const { validatorRegisterItem, validatorLogin } = require("../validators/user");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router()



router.post('/auth/register', validatorRegisterItem, registerCtrl)
router.get('/', validateJWT, AllUsers)
router.put('/:id', validateJWT, validatorRegisterItem, UpdateUser)
router.delete('/:id', validateJWT, validatorRegisterItem, deleteUser)

// routes login
router.post('/auth/login', validatorLogin, loginCtrl)

module.exports = router
