import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


export const registerUser = async (req, res, next) => {
  try {
    const data = await UserService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User registered successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'Error registering user: ' + error.message
    });
  }
};


export const loginUser = async (req, res, next) => {
  //console.log(req.body)
  try {
    const data = await UserService.loginUser(req.body);
    console.log(req.body)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User logged in successfully'
    });
  } catch (error) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      code: HttpStatus.UNAUTHORIZED,
      message: 'Error logging in: ' + error.message
    });
  }
};

export const forgotPassword = async (req, res, next) => {
  //console.log(req.body);
  try {
    const data = await UserService.forgotPassword(req.body); 
    
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'Password reset token sent successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};



export const resetPassword = async (req, res, next) => {
 // console.log(req.body);
  try {
 const data = await UserService.resetPassword(req.body)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'Password reset successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};
