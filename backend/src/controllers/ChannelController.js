import { ChannelModel } from "../models/chanalesModel.js"
import { UploadCloudnary } from "./UserController.js"
export const GetChannelID=async(req,res,next)=>{
    try{
        const {id}=req.params
        const channel=await ChannelModel.findById(id)
        if(!channel){
            return res.status(404).json({message:"No se encontro el canal"})
        }
        res.status(200).json(channel)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const CreateChannel=async(req,res,next)=>{
    try{
        const {title,description,image,miembros}=req.body
        let miembrosConvert=JSON.parse(miembros)
        let imageURL=image
        if(req.file){
            imageURL=await UploadCloudnary(req.file.path,"uploads")
        }
        const channel=await ChannelModel.create({
            title,description,image:imageURL,miembros:miembrosConvert,tipo:"publico"
        })
        res.status(200).json(channel)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const GetAllChannel=async(req,res,next)=>{
    try{
        const channels=await ChannelModel.find()
        if(!channels){
            return res.status(404).json({message:"No se encontro el modelo"})
        }
        res.status(200).json(channels)
    }catch(err){
        console.error(err)
        next(err)
    }
}