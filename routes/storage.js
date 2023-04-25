const { Router } = require("express");
const { allStotages, StotagesById, createStotage, deleteStotage, updateStotage } = require("../controllers/storage");

const router = Router()



router.post('/', createStotage)
router.get('/', allStotages)
router.get('/:id', StotagesById)
router.put('/:id', updateStotage)
router.delete('/:id', deleteStotage)


module.exports = router
