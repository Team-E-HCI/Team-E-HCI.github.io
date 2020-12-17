const mongoose = require('mongoose')

const komentarSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Akun',
  },
  nama: {
    type: String,
  },
  avatar: {
    type: String,
  },
  komen: {
    type: String,
    required: true,
  },
  tanggalKomentar: {
    type: String,
    default: Date,
  },
})

const postSchema = mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Akun',
  },
  judul: {
    type: String,
    required: true,
  },
  postingan: {
    type: String,
    required: true,
  },
  gambar: {
    type: [],
  },
  komentar: [komentarSchema],
  kategori: {
    type: String,
    required: true,
  },
  tanggalDibuat: {
    type: String,
    default: Date,
  },
})

module.exports = mongoose.model('Konten', postSchema, 'Konten')
