import { Messagemodel } from "../models/messageModel.js";
import { UploadCloudnary } from "./UserController.js";
export const GetMessageChannel=async(req,res,next)=>{
    try{
        const {channelID}=req.params
        const messages=await Messagemodel.find({channel:channelID})
        if(!messages){
            return res.status(404).json({message:"No se encontraron mensajes"})
        }
        res.status(200).json(messages)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const CreateMessageFile=async(req,res,next)=>{
    try{
        const {imageURL,type,content,channel,User}=req.body
        let imageFile=imageURL
        if(req.file){
            imageFile=await UploadCloudnary(req.file.path)
        }      

        const createMessage=await Messagemodel.create({
            imageURL:imageFile,
            type:"mix",
            content,
            channel,
            User
        })
        res.status(200).json(createMessage)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const CreateMessageChannel=async(req,res,next)=>{
    try{
        const {content,channel,User}=req.body
        const createMessage=await Messagemodel.create({
            content,
            channel,
            User
        })        
        res.status(200).json({message:"Se creo el mensaje en el grupo especificado"})
    }catch(err){
        console.error(err)
        next(err)
    }
}