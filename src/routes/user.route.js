import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginUserValidator} from '../validators/user.validator';
import { emailValidator } from '../validators/user.validator';
import { newUserValidator } from '../validators/user.validator';
import { resetValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { resetPasswordAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Route for user registration
router.post('',newUserValidator,userController.registerUser);
// Route for user login
router.post('/login', loginUserValidator,userController.loginUser); 
//Forget Password
router.post('/forgot-password', emailValidator, userController.forgotPassword);
//Reset Password
router.post('/reset-password', resetValidator,resetPasswordAuth, userController.resetPassword);


export default router;