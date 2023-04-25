const { Router } = require("express");
const { createAdmin, deleteAdmin, updateAdmin } = require("../controllers/admin");

const router = Router()



router.post('/', createAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)


module.exports = router
