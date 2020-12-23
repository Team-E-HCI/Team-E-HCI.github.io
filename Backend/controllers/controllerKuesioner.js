const Kuesioner = require("../models/Kuesioner");
const Akun = require("../models/User");
const Aktifitas = require("../models/Aktifitas");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../helper/helper").upload;
const vs = require("v-response");
const asyncHandler = require("express-async-handler");

const isiKuesioner = asyncHandler(async (req, res, next) => {
  const akun = await Akun.findById(req.user._id).select("-password");
  const {
    pertanyaan1,
    pertanyaan2,
    pertanyaan3,
    pertanyaan4,
    pertanyaan5,
  } = req.body;

  if (akun.sudahIsi == true) {
    res.status(400).json({ message: "Anda sudah mengisi kuesioner ini." });
  }

  const kuesioner = await Kuesioner.create({
    pengguna: akun,
    nama: akun.nama,
    email: akun.email,
    pertanyaan1,
    pertanyaan2,
    pertanyaan3,
    pertanyaan4,
    pertanyaan5,
  });

  if (kuesioner) {
    res.status(200).json({
      pengguna: akun,
      pertanyaan1: kuesioner.pertanyaan1,
      pertanyaan2: kuesioner.pertanyaan2,
      pertanyaan3: kuesioner.pertanyaan3,
      pertanyaan4: kuesioner.pertanyaan4,
      pertanyaan5: kuesioner.pertanyaan5,
    });
  }

  const nama = akun.nama;
  const aktifitas = await Aktifitas.create({
    pengguna: akun,
    pesan: `${nama} telah mengisi kuesioner`,
  });

  if (aktifitas) {
    res.status(200);
    console.log(aktifitas);
  }
});

module.exports = isiKuesioner;
