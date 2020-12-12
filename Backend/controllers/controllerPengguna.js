const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')
const Akun = require('../models/User')

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authManual = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const akun = await Akun.findOne({ email })

  if (akun && (await akun.matchPassword(password))) {
    res.json({
      _id: akun._id,
      nama: akun.nama,
      email: akun.email,
      token: generateToken(akun._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerManual = asyncHandler(async (req, res) => {
  const { nama, email, password } = req.body

  const userExists = await Akun.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Email telah digunakan')
  }

  const akun = await Akun.create({
    nama,
    email,
    password,
  })

  if (akun) {
    res.status(201).json({
      _id: akun._id,
      nama: akun.nama,
      email: akun.email,
      token: generateToken(akun._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = {
  authManual,
  registerManual,
}
