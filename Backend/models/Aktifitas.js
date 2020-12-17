const mongoose = require("mongoose");
const Aktifitas = new mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Akun",
  },
  pesan: {
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

module.exports = mongoose.model("Aktifitas", Aktifitas, "Aktifitas");
