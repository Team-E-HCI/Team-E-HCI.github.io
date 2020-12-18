const express = require('express')
const router = express.Router()
const {
  authManual,
  registerManual,
  profilPengguna,
  updateProfil,
  profilPenggunaLain,
  bookmarkPengguna,
} = require('../controllers/controllerPengguna')
const { pelindung } = require('../middleware/validation')
const { route } = require('./konten')

router.route('/register/manual').post(registerManual).get(pelindung)
router.post('/login/manual', authManual)
router.route('/profile').get(pelindung, profilPengguna)
router.route('/profile/update').put(pelindung, updateProfil)
router.route('/profile/:userid').get(pelindung, profilPenggunaLain)
router.route('/bookmark').get(pelindung, bookmarkPengguna)

module.exports = router
