import mongoose from "mongoose";
const SchemaChannel=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    image:{
        type:String
    },
    miembros:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"        
    }],
    tipo:{
        type:String,
        enum:["publico","privado"],
        default:"publico"
    }
    
},{timestamps:true})
/** @type {import("mongoose").Model<any>} */
export const ChannelModel=mongoose.model("Channel",SchemaChannel)