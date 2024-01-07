import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// Login / sendToken
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    //set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//signUp
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

//Logout /clear cookie
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

//get profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send(' get user profile');
});

//Update User
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user');
});

//get all users [admin]

const getUsers = asyncHandler(async (req, res) => {
  res.send('get all users');
});
//get user by id [admin]
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

//Delete Users [admin]
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

//update User[admin]
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUserProfile,
  updateUser,
};
