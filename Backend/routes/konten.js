const {
  tambahPostingan,
  tampilkanSatuKonten,
  hapusKonten,
  tambahKomentar,
  hapusKomentar,
} = require("../controllers/controllerKonten");
const multer = require("multer");
const express = require("express");
const { pelindung } = require("../middleware/validation");
const router = express.Router();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("file", file);
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let maxSize = 2 * 1024 * 1024;
let upload = multer({
  storage,
  limits: {
    files: 5,
    fieldSize: maxSize,
  },
});

router.post("/create", pelindung, upload.array("gambar", 5), tambahPostingan);
router.route("/:id").get(tampilkanSatuKonten).delete(hapusKonten);
router.route("/:id/komentar").post(pelindung, tambahKomentar);
router.route("/:id/komentar/:komentar_id").delete(pelindung, hapusKomentar);
module.exports = router;
