const express = require("express");
const router = express.Router();
const {
  authManual,
  registerManual,
  profilPengguna,
  updateProfil,
} = require("../controllers/controllerPengguna");
const { pelindung } = require("../middleware/validation");

router.route("/register/manual").post(registerManual).get(pelindung);
router.post("/login/manual", authManual);
router.route("/profile").get(pelindung, profilPengguna);
router.route("/profile/update").post(pelindung, updateProfil);

module.exports = router;
