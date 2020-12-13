const Konten = require("../models/Post");
const Akun = require("../models/User");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../helper/helper").upload;
const vs = require("v-response");
const asyncHandler = require("express-async-handler");

const tambahPostingan = asyncHandler(async (req, res, next) => {
  const files = req.files;
  try {
    let urls = [];
    let berkas = async (path) => await upload(path);
    for (const file of files) {
      const { path } = file;
      console.log("path", file);

      const newPath = await berkas(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    if (urls) {
      // let body = req.body;
      let pengguna = await Akun.findById(req.user._id).select("-password");
      // let bodyw = _.extend(body, { pengguna: pengguna }, { gambar: urls });
      let new_konten = new Konten({
        pengguna: pengguna,
        judul: req.body.judul,
        postingan: req.body.postingan,
        kategori: req.body.kategori,
        gambar: urls,
      });
      await new_konten
        .save()
        .then((saved) => {
          return res.json(saved);
        })
        .catch((error) => {
          return res.json(error);
        });
    }
    if (!urls) {
      // let body = req.body;
      let new_konten = new Konten({
        pengguna: pengguna,
        judul: req.body.judul,
        postingan: req.body.postingan,
        kategori: req.body.kategori,
      });
      await new_konten
        .save()
        .then((saved) => {
          return res.json(saved);
        })
        .catch((error) => {
          return res.json(error);
        });
    }
  } catch (error) {
    res.status(400);
    console.log("error: ", error);
    return next(error);
  }
});

const tampilkanSatuKonten = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);

  if (konten) {
    res.json(konten);
  } else {
    res.status(404);
    throw new Error("Konten tidak ditemukan");
  }
});

const tampilkanKategoriCoding = asyncHandler(async (req, res) => {
  try {
    const konten = await Konten.find({
      kategori: "Coding",
    })
      .populate("pengguna")
      .sort({
        tanggalDibuat: "desc",
      })
      .lean();
    if (konten) {
      res.json(konten);
    } else {
      res.status(404);
      res.json({ message: "Konten tidak ditemukan" });
    }
  } catch (error) {
    console.error(err);
    res.status(404);
  }
});

const tampilkanKategoriGadgetError = asyncHandler(async (req, res) => {
  try {
    const konten = await Konten.find({
      kategori: "Gadget Error",
    })
      .populate("pengguna")
      .sort({
        tanggalDibuat: "desc",
      })
      .lean();
    if (konten) {
      res.json(konten);
    } else {
      res.status(404);
      res.json({ message: "Konten tidak ditemukan" });
    }
  } catch (error) {
    console.error(err);
    res.status(404);
  }
});

const tampilkanKategoriTeknologi = asyncHandler(async (req, res) => {
  try {
    const konten = await Konten.find({
      kategori: "Teknologi",
    })
      .populate("pengguna")
      .sort({
        tanggalDibuat: "desc",
      })
      .lean();
    if (konten) {
      res.json(konten);
    } else {
      res.status(404);
      res.json({ message: "Konten tidak ditemukan" });
    }
  } catch (error) {
    console.error(err);
    res.status(404);
  }
});

const hapusKonten = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);

  if (konten) {
    await konten.remove();
    res.json({ message: "Konten dihapus" });
  } else {
    res.status(404);
    throw new Error("Konten tidak ditemukan");
  }
});

const tambahKomentar = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);

  if (konten) {
    const koment = {
      pengguna: req.user._id,
      komen: req.body.komen,
    };

    konten.komentar.push(koment);
    await konten
      .save()
      .then((saved) => {
        return res.status(201).json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });
  } else {
    res.status(404);
    throw new Error("Konten tidak ditemukan");
  }
});

const hapusKomentar = asyncHandler(async (req, res) => {
  try {
    const konten = await Konten.findById(req.params.id);

    const komentar = konten.komentar.find(
      (komentar) => komentar.id === req.params.komentar_id
    );

    if (!komentar) {
      return res
        .status(404)
        .json({ message: "komentar tidak ditemukan/tidak ada." });
    }

    if (komentar.pengguna.toString() !== req.user.id) {
      return res.status(404).json({ message: "Tindakan tidak diizinkan" });
    }

    const index = konten.komentar
      .map((komentar) => komentar.pengguna.toString())
      .indexOf(req.user._id);

    konten.komentar.splice(index, 1);
    await konten
      .save()
      .then((saved) => {
        return res.status(201).json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send("server error");
  }
});

module.exports = {
  tambahPostingan,
  tampilkanSatuKonten,
  hapusKonten,
  tambahKomentar,
  hapusKomentar,
  tampilkanKategoriCoding,
  tampilkanKategoriGadgetError,
  tampilkanKategoriTeknologi,
};
