import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Login / sendToken
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
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
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('user already exists');
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//Logout /clear cookie
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
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
