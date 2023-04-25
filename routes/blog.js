const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router()


//  routes categorias
router.post('/categories',)
router.get('/categories',)
router.get('/categories/:id',)
router.put('/categories/:id',)
router.delete('/categories/:id',)

// routes post
router.post('/post',)
router.get('/post',)
router.get('/post/:id',)
router.put('/post/:id',)
router.delete('/post/:id',)

module.exports = router
