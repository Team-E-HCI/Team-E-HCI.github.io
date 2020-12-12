const mongoose = require("mongoose");

const komentarSchema = mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Akun",
  },
  komen: {
    type: String,
    required: true,
  },
  tanggalKomentar: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Akun",
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
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Konten", postSchema, "Konten");
