const Konten = require("../models/Post");
const Akun = require("../models/User");
const Aktifitas = require("../models/Aktifitas");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../helper/helper").upload;
const vs = require("v-response");
const asyncHandler = require("express-async-handler");

const tambahPostingan = asyncHandler(async (req, res, next) => {
  const files = req.files;
  if (files) {
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
        const nama = pengguna.nama;
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
        const aktifitas = await Aktifitas.create({
          pengguna: pengguna,
          pesan: `${nama} telah mengupload konten`,
        });

        if (aktifitas) {
          res.status(200);
          console.log(aktifitas);
        }
      }
    } catch (error) {
      res.status(400);
      console.log("error: ", error);
      return next(error);
    }
  }

  // // let body = req.body;
  // let new_konten = new Konten({
  //   pengguna: pengguna,
  //   judul: req.body.judul,
  //   postingan: req.body.postingan,
  //   kategori: req.body.kategori,
  // });
  // await new_konten
  //   .save()
  //   .then((saved) => {
  //     return res.json(saved);
  //   })
  //   .catch((error) => {
  //     return res.json(error);
  //   });

  // const aktifitas = await Aktifitas.create({
  //   pengguna: pengguna,
  //   pesan: `${nama} telah mengupload konten (tanpa gambar)`,
  // });

  // if (aktifitas) {
  //   res.status(200);
  //   console.log(aktifitas);
  // }
});

const updateKonten = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);
  const pengguna = await Akun.findById(konten.pengguna._id);
  const nama = pengguna.nama;
  if (konten) {
    (konten.judul = req.body.judul || konten.judul),
      (konten.postingan = req.body.postingan || konten.postingan),
      (konten.kategori = req.body.kategori || konten.kategori);

    const update = await konten
      .save()
      .then((saved) => {
        return res.json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });

    const aktifitas = await Aktifitas.create({
      pengguna: pengguna,
      pesan: `${nama} telah memperbarui konten`,
    });

    if (aktifitas) {
      res.status(200);
      console.log(aktifitas);
    }
  } else {
    res.status(404);
    res.json({ message: "Konten tidak ditemukan" });
  }
});

const tampilkanSeluruhKonten = asyncHandler(async (req, res) => {
<<<<<<< HEAD
  const konten = await Konten.find({})
    .populate('pengguna')
    .sort({ tanggalDibuat: 'desc' })
    .lean()
=======
  const konten = await Konten.find({}).populate('pengguna').sort({tanggalDibuat: "desc"}).lean()
>>>>>>> ed1677587e06ef3cb649e083275f04012f53e003

  if (konten) {
    res.json(konten);
  } else {
    res.status(404);
    throw new Error("Konten tidak ditemukan");
  }
});

const tampilkanSatuKonten = asyncHandler(async (req, res) => {
<<<<<<< HEAD
  const konten = await Konten.findById(req.params.id).populate(
    'pengguna',
    'nama avatar'
  )
=======
  const konten = await Konten.findById(req.params.id);
>>>>>>> ed1677587e06ef3cb649e083275f04012f53e003

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
      res.status(404)
      throw new Error('Konten tidak ditemukan')
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
      res.status(404)
      throw new Error('Konten tidak ditemukan')
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
      res.status(404)
      throw new Error('Konten tidak ditemukan')
    }
  } catch (error) {
    console.error(err);
    res.status(404);
  }
});

const hapusKonten = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);
  const pengguna = await Akun.findById(konten.pengguna._id).select("-password");
  const nama = pengguna.nama;
  if (konten) {
    await konten.remove();
    res.json({ message: "Konten dihapus" });
    const aktifitas = await Aktifitas.create({
      pengguna: pengguna,
      pesan: `${nama} telah menghapus konten`,
    });

    if (aktifitas) {
      res.status(200);
      console.log(aktifitas);
    }
  } else {
    res.status(404);
    throw new Error("Konten tidak ditemukan");
  }
});

const tambahKomentar = asyncHandler(async (req, res) => {
<<<<<<< HEAD
  const konten = await Konten.findById(req.params.id)

  const pemilik = await Akun.findById(konten.pengguna._id).select('-password')

  if (konten) {
    const koment = {
      nama: req.user.nama,
      avatar: req.user.avatar,
      pengguna: req.user._id,
=======
  const konten = await Konten.findById(req.params.id);
  const pemilik = await Akun.findById(konten.pengguna._id).select("-password");
  const pengguna = await Akun.findById(req.user._id).select("-password");
  const nama = pengguna.nama;
  if (konten) {
    const koment = {
      pengguna: pengguna,
      nama: pengguna.nama,
      avatar: pengguna.avatar
>>>>>>> ed1677587e06ef3cb649e083275f04012f53e003
      komen: req.body.komen,
    };

    const notif = {
      pesan: "Seseorang telah mengomentari pesan Anda.",
      url: `http://localhost:3000/api/konten/${konten._id}`,
    };

    konten.komentar.push(koment);
    pemilik.notifications.push(notif);
    await konten
      .save()
      .then((saved) => {
        return res.status(201).json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });

      await pemilik
      .save()
      .then((saved) => {
        return res.status(201).json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });

    if (koment) {
      const aktifitas = await Aktifitas.create({
        pengguna: pengguna,
        pesan: `${nama} telah mengomentari sebuah konten`,
      });

      if (aktifitas) {
        res.status(200);
        console.log(aktifitas);
      }
    }
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

const tambahBookmark = asyncHandler(async (req, res) => {
  const konten = await Konten.findById(req.params.id);
  const user = await Akun.findById(req.user._id).select("-password");
  const pengguna = await Akun.findById(konten.pengguna._id).select("-password");
  if (konten) {
    const penanda = {
      pengguna: pengguna,
      judul: konten.judul,
      postingan: konten.postingan,
      gambar: konten.gambar,
      kategori: konten.kategori,
    };

    user.bookmarks.push(penanda);
    await user
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

module.exports = {
  tambahPostingan,
  updateKonten,
  tampilkanSeluruhKonten,
  tampilkanSatuKonten,
  hapusKonten,
  tambahKomentar,
  hapusKomentar,
  tampilkanKategoriCoding,
  tampilkanKategoriGadgetError,
  tampilkanKategoriTeknologi,
  tambahBookmark,
};
