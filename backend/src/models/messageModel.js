import mongoose from "mongoose";
const MessageSchema=mongoose.Schema({    
    imageURL:{
        type:String,
        required:false
    },
    type:{
        type:String,
        enum:["text","image","mix"],
        default:"text"
    },
    content:{
        type:String,
        required:false
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