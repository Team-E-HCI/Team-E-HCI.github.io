const express = require('express')
const router = express.Router()
const {
  authManual,
  registerManual,
} = require('../controllers/controllerPengguna')
const { pelindung } = require('../middleware/validation')

router.route("/register/manual").post(registerManual).get(pelindung);
router.post("/login/manual", authManual);

module.exports = router
