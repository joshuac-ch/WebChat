import mongoose from "mongoose";
const MessageSchema=mongoose.Schema({
    senderID:{
        type:String,
        required:false
    },
    recivedID:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:true
    },
    channel:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    }],
    User:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
},{timestamps:true})
/** @type {import("mongoose").Model<any>} */
export const Messagemodel=mongoose.model("Messages",MessageSchema)