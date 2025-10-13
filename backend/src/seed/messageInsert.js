import mongoose from "mongoose";
import { Messagemodel } from "../models/messageModel.js";

export const InsertMessages=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGOURL)
        await Messagemodel.deleteMany()
        const message={
            senderID:"1",
            recivedID:"2",
            content:"Hola mundo"
        }
        await Messagemodel.insertOne(message)
        console.log("Se implemento el mensage")
    
    }catch(err){
        console.error(err)
    }
}