import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../utils/sendMail';
import dotenv from 'dotenv';
dotenv.config();


export const registerUser = async (body) => {
  const isExist = await User.findOne({ email: body.email });

  if (isExist) {
    throw new Error('User already exists');
  } else {
    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;

    const data = await User.create(body);

    const response = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    return response;
  }
};



export const loginUser = async (body) => {
  console.log(body)
  const user = await User.findOne({ email: body.email });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordMatch = await bcrypt.compare(body.password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Invalid password');
  }
  else {
    var token = jwt.sign({ id:user.id, email: user.email }, process.env.JWT_SECRET)
    return token;
  }
}; 




export const forgotPassword = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      throw new Error('User not found');
    }
    const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWTSECRET);
   await sendMail(user.email, token);
    return token;
  } catch (error) {
    throw new Error('Error in forgotPassword function: ' + error.message);
  }
};



export const resetPassword = async (body) => {
  const user = await User.findOne({ email: body.email });
  if (!user){ 
  throw new Error('User not exist')
  }else {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);


  user.password = hashedPassword;
  return await user.save();
  }
};





