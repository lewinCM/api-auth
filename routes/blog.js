const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const { createcategory, allcategory, categoryById, deletecategory, updatecategory } = require("../controllers/categories");
const { createPost, PostById, allPost, deletePost, updatePost } = require("../controllers/post");

const router = Router()


//  routes categorias
router.post('/categories', createcategory)
router.get('/categories', allcategory)
router.get('/categories/:id', categoryById)
router.put('/categories/:id', updatecategory)
router.delete('/categories/:id', deletecategory)

// routes post
router.post('/post', createPost)
router.get('/post', allPost)
router.get('/post/:id', PostById)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

module.exports = router
