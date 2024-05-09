

import { errorHandler } from '../utils/error.js';
import User from './../models/user.model.js';
import bcryptjs from 'bcryptjs'



export const Signup= async(req,res,next)=>{

   const{username,email,password}= req.body;
   console.log(req.body)
   const hashedPassword = bcryptjs.hashSync(password,12)
   const newUser = new User ({username,email,password:hashedPassword})
   try{
    await newUser.save()
  res.status(201).json("user created successfully")
}

   catch(error){
     next(error)
   }
   
}