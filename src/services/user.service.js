import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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