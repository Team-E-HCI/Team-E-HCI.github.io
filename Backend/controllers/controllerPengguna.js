const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')
const Akun = require('../models/User')
const Konten = require('../models/Post')
const Aktifitas = require('../models/Aktifitas')
const gravatar = require('gravatar')
// const { options } = require("../routes/konten");

// @desc    Auth user & get token
// @route   POST /api/user/login/manual
// @access  Public
const authManual = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const akun = await Akun.findOne({ email })
  const nama = akun.nama

  if (akun && (await akun.matchPassword(password))) {
    res.json({
      _id: akun._id,
      nama: akun.nama,
      email: akun.email,
      avatar: akun.avatar,
      token: generateToken(akun._id),
    })

    const aktifitas = await Aktifitas.create({
      pengguna: akun,
      pesan: `${nama} telah login`,
    })

    if (aktifitas) {
      res.status(200)
      console.log(aktifitas)
    }
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/user/register/manual
// @access  Public
const registerManual = asyncHandler(async (req, res) => {
  const { nama, email, password } = req.body

  const userExists = await Akun.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Email telah digunakan')
  }
  const avatar = gravatar.url(email, {
    s: '300',
    r: 'pg',
    d: 'identicon',
  })

  const akun = await Akun.create({
    avatar,
    nama,
    email,
    password,
  })

  const username = akun.nama

  if (akun) {
    res.status(201).json({
      _id: akun._id,
      avatar: akun.avatar,
      nama: akun.nama,
      email: akun.email,
      token: generateToken(akun._id),
    })
    const aktifitas = await Aktifitas.create({
      pengguna: akun,
      pesan: `${username} telah melakukan registrasi`,
    })

    if (aktifitas) {
      res.status(200)
      console.log(aktifitas)
    }
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const profilPengguna = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.user._id).select('-password')
  const konten = await Konten.find({
    pengguna: akun,
  })

  if (akun) {
    res.json({
      _id: akun._id,
      name: akun.nama,
      email: akun.email,
      github: akun.github,
      twitter: akun.twitter,
      avatar: akun.avatar,
      konten: konten,
      bookmarks: akun.bookmarks,
    })
  } else {
    res.status(404)
    throw new Error('Akun tidak ditemukan')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const profilPenggunaLain = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.params.userid).select('-password')
  const konten = await Konten.find({
    pengguna: akun,
  })

  if (akun) {
    res.json({
      _id: akun._id,
      name: akun.nama,
      email: akun.email,
      avatar: akun.avatar,
      Admin: akun.Admin,
      github: akun.github,
      twitter: akun.twitter,
      konten: konten,
      bookmarks: akun.bookmarks,
    })
  } else {
    res.status(404)
    throw new Error('Akun tidak ditemukan')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const updateProfil = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.user._id).select('-password')
  const nama = akun.nama
  if (akun) {
    ;(akun.nama = req.body.nama || akun.nama),
      (akun.email = req.body.email || akun.email),
      (akun.github = req.body.github),
      (akun.twitter = req.body.twitter)

    const update = await akun
      .save()
      .then((saved) => {
        return res.json(saved)
      })
      .catch((error) => {
        return res.json(error)
      })

    const aktifitas = await Aktifitas.create({
      pengguna: akun,
      pesan: `${nama} telah memperbarui profil`,
    })

    if (aktifitas) {
      res.status(200)
      console.log(aktifitas)
    }
  } else {
    res.status(404)
    res.json({ message: 'Akun tidak ditemukan' })
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const bookmarkPengguna = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.user._id).select('-password')
  if (akun) {
    res.json({
      bookmarks: akun.bookmarks,
    })
  } else {
    res.status(404)
    throw new Error('Bookmarks kosong')
  }
})

module.exports = {
  authManual,
  registerManual,
  profilPengguna,
  updateProfil,
  profilPenggunaLain,
  bookmarkPengguna,
}
