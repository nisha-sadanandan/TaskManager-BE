import jwt from "jsonwebtoken"
import dotenv from  'dotenv'

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const  generateToken = (email)=>{
  const SECRET_KEY = process.env.SECRET_KEY;
    return jwt.sign({data:email},SECRET_KEY, { expiresIn: '1d' });
}