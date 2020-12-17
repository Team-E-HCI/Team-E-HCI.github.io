const express = require("express");
const router = express.Router();
const isiKuesioner = require("../controllers/controllerKuesioner");
const { pelindung } = require("../middleware/validation");

router.route("/").post(pelindung, isiKuesioner);

module.exports = router;
