const {
  tambahPostingan,
  tampilkanSatuKonten,
  hapusKonten,
  tambahKomentar,
  hapusKomentar,
  updateKonten,
  tampilkanKategoriCoding,
  tampilkanKategoriGadgetError,
  tampilkanKategoriTeknologi,
  tampilkanSeluruhKonten,
  tambahBookmark,
} = require('../controllers/controllerKonten')
const multer = require('multer')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary').v2
const express = require('express')
const { pelindung } = require('../middleware/validation')
const router = express.Router()

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('file', file)
    cb(null, './Backend/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

let maxSize = 2 * 1024 * 1024
let upload = multer({
  storage,
  limits: {
    files: 5,
    fieldSize: maxSize,
  },
})

router.post('/upload', upload.array('gambar', 5), async (req, res) => {
  try {
    const files = req.files
    const urls = []
    for (const file of files) {
      const newPath = await cloudinary.uploader.upload(file.path)
      urls.push(newPath.url)
    }
    res.send(urls)
  } catch (error) {
    res.send(error)
  }
})
router.post('/create', pelindung, tambahPostingan)
router
  .route('/:id')
  .get(pelindung, tampilkanSatuKonten)
  .delete(pelindung, hapusKonten)
  .post(pelindung, updateKonten)
router.route('/:id/komentar').post(pelindung, tambahKomentar)
router.route('/:id/komentar/:komentar_id').delete(pelindung, hapusKomentar)
router.route('/').get(pelindung, tampilkanSeluruhKonten)
router
  .route('/kategori/gadget-error')
  .get(pelindung, tampilkanKategoriGadgetError)
router.route('/kategori/coding').get(pelindung, tampilkanKategoriCoding)
router.route('/kategori/teknologi').get(pelindung, tampilkanKategoriTeknologi)
router.route('/:id/bookmark').post(pelindung, tambahBookmark)

module.exports = router
