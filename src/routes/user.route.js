import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginUserValidator} from '../validators/user.validator'
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Route for user registration
router.post('',newUserValidator,userController.registerUser);

// Route for user login
router.post('/login', loginUserValidator,userController.loginUser); 

router.post('/forgot-password', emailValidator,userAuth, emailController.forgotPassword);

export default router;