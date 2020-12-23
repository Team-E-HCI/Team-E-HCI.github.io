const express = require("express");
const router = express.Router();
const {
  authManual,
  registerManual,
  profilPengguna,
  updateProfil,
  profilPenggunaLain,
  bookmarkPengguna,
  notifPengguna
} = require("../controllers/controllerPengguna");
const { pelindung } = require("../middleware/validation");
const { route } = require("./konten");

router.route("/register/manual").post(registerManual).get(pelindung);
router.post("/login/manual", authManual);
router.route("/profile").get(pelindung, profilPengguna);
router.route("/profile/update").post(pelindung, updateProfil);
router.route("/profile/:userid").get(pelindung, profilPenggunaLain);
router.route("/bookmark").get(pelindung, bookmarkPengguna);
router.route("/notifikasi").get(pelindung, notifPengguna);

module.exports = router;
