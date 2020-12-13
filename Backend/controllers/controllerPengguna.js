const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const Akun = require("../models/User");
const Konten = require("../models/Post");

// @desc    Auth user & get token
// @route   POST /api/user/login/manual
// @access  Public
const authManual = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const akun = await Akun.findOne({ email });

  if (akun && (await akun.matchPassword(password))) {
    res.json({
      _id: akun._id,
      nama: akun.nama,
      email: akun.email,
      token: generateToken(akun._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/user/register/manual
// @access  Public
const registerManual = asyncHandler(async (req, res) => {
  const { nama, email, password } = req.body;

  const userExists = await Akun.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email telah digunakan");
  }

  const akun = await Akun.create({
    nama,
    email,
    password,
  });

  if (akun) {
    res.status(201).json({
      _id: akun._id,
      nama: akun.nama,
      email: akun.email,
      token: generateToken(akun._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const profilPengguna = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.user._id);
  const konten = await Konten.find({
    pengguna: akun,
  });

  if (akun) {
    res.json({
      _id: akun._id,
      name: akun.nama,
      email: akun.email,
      Admin: akun.Admin,
      github: akun.github,
      twitter: akun.twitter,
      konten: konten,
    });
  } else {
    res.status(404);
    throw new Error("Akun tidak ditemukan");
  }
});

// @desc    Update user profile
// @route   GET /api/users/profile
// @access  Private
const updateProfil = asyncHandler(async (req, res) => {
  const akun = await Akun.findById(req.user._id).select("-password");
  if (akun) {
    (akun.nama = req.body.nama || akun.nama),
      (akun.email = req.body.email || akun.nama),
      (akun.github = req.body.github),
      (akun.twitter = req.body.twitter);

    const update = await akun
      .save()
      .then((saved) => {
        return res.json(saved);
      })
      .catch((error) => {
        return res.json(error);
      });
  } else {
    res.status(404);
    res.json({ message: "Akun tidak ditemukan" });
  }
});

module.exports = {
  authManual,
  registerManual,
  profilPengguna,
  updateProfil,
};
