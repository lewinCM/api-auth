const { Router } = require("express");
const { allTutors, TutorsById, updateTutors, deleteTutors, createTutor } = require("../controllers/tutores");

const router = Router()



router.post('/', createTutor)
router.get('/', allTutors)
router.get('/:id', TutorsById)
router.put('/:id', updateTutors)
router.delete('/:id', deleteTutors)


module.exports = router
