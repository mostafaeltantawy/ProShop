import exress from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUserProfile,
  updateUser,
} from '../controllers/userController.js';
const router = exress.Router();

router.route('/').post(registerUser).get(getUsers);

router.post('/logout', logoutUser);

router.post('/login', authUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);

router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
