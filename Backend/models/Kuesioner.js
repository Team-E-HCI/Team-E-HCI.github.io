const mongoose = require("mongoose");
const Kuesioner = new mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Akun",
  },
  nama:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pertanyaan1: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  pertanyaan2: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  pertanyaan3: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  pertanyaan4: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  pertanyaan5: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  tanggalDibuat: {
    type: String,
    default: Date,
  },
});

module.exports = mongoose.model("Kuesioner", Kuesioner, "Kuesioner");
