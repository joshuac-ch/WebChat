import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:""
    },
    username:{
        type:String,
        required:false
    },
    number:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:""
    }
},{timestamps:true})
/** @type {import("mongoose").Model<any>} */
export const userModel=mongoose.model("User",userSchema)