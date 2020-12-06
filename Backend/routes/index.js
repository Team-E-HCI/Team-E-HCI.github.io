const express = require("express");
const cek = require("../middleware/cek");
const router = express.Router();
const { cekLogin, cekTamu } = require("../middleware/cek");
//Login page Google
//route GET /
router.get("/", cekTamu, (req, res) => {
  res.render("login");
});

//Dashboard Page
//route GET /dashboard
router.get("/dashboard", cekLogin, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
