const { Router } = require("express");
const { sendEmail } = require("../controllers/contact");

const router = Router()

router.post('/', sendEmail)



module.exports = router
