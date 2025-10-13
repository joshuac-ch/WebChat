import mongoose from "mongoose";

import { userModel } from "../models/userModel.js";

export const InsertUsers=async()=>{
    try{
    await mongoose.connect(process.env.MONGOURL)
    await userModel.deleteMany()
    const users=
        {
            fullname:"nino nakano",
            email:"nino@gmail.com",
            profile:"",
            password:"123"
        }
    
    await userModel.insertOne(users)
    console.log("Se agrego el usuario")
    }catch(err){
        console.error(err)
    }
} 
