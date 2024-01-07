import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// Login / sendToken
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
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
