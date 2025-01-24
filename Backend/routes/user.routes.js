import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { register, login, logout, updateProfile } from '../controller/user.controller.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/updateProfile').post(isAuthenticated, updateProfile);

export default router;
