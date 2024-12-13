
const User = require('../models/Users.js')
const JWT = require('jsonwebtoken')


exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body
    const existingUser = await User.findOne({ email: email })

    if (!existingUser) {
      const user = new User({
        userName: userName,
        email: email,
        password: password
      })
      await user.save()
      return res.status(201).json({ message: 'New User Created Successfully' })
    }
    return res.status(200).json({ message: 'User with the provided email already exists' })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.error(error)
  }

}


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email, password: password })

    if (!user) return res.json({ message: 'No User found' })

    const accessToken = JWT.sign({
      id: user._id,
    },
      'This is my jwt secret',
      { expiresIn: "3d" }
    );

    return res.status(200).json({ message: 'login successful', accessToken })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.error(error)
  }

}