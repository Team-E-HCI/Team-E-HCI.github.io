const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Bookmark = new mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Akun",
  },
  judul: {
    type: String,
  },
  postingan: {
    type: String,
  },
  gambar: {
    type: [],
  },
  kategori: {
    type: String,
  },
  tanggalDibuat: {
    type: String,
    default: Date,
  },
});

const Notifikasi = new mongoose.Schema({
  pesan: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  url: {
    type: String,
  },
  tanggalDibuat: {
    type: String,
    default: Date,
  },
});

const Akun = new mongoose.Schema({
  avatar: {
    type: String,
  },
  nama: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  github: {
    type: String,
  },
  twitter: {
    type: String,
  },
  konten: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Konten",
  },
  bookmarks: [Bookmark],
  notifications: [Notifikasi],
  tanggalDibuat: {
    type: String,
    default: Date,
  },
});

Akun.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

Akun.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("Akun", Akun, "Akun");
