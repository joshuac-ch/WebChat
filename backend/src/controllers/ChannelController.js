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
export const GetChannelUser=async(req,res,next)=>{
    try{
        const {id}=req.params
        const canalesUser=await ChannelModel.find({miembros:id})
        if(!canalesUser){
            return res.status(404).json({message:"No se encontraron canales para ese usuario"})
        }
        res.status(200).json(canalesUser)
    }catch(err){
        next(err)
    }
}
export const GetChannelCategoria=async(req,res,next)=>{
    try{
        const {id}=req.params

        const channeluser=await ChannelModel.find({ miembros:id})
        if(!channeluser){
            return res.status(200).json("No se ecnontraron chats")
        }
        res.status(200).json(channeluser)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const DeleteChatUSER=async(req,res,next)=>{
    const {id}=req.params
    const delchatuser = await ChannelModel.findById(id)
    if(!delchatuser){
        return res.status(404).json({message:"No se encontro ese canal"})
    }
    await ChannelModel.deleteOne({_id:id})
    return res.status(200).json({message:"Chat eliminado"})
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
export const SearchChannel=async(req,res)=>{
    try{
        const {query}=req.params
       const search=await ChannelModel.find({title:{$regex:query,$options:"i"}})    
        if(!search){
            return res.status(404).json({message:"No se enonctraron coincidencias"})
        }
        return res.status(200).json(search)
    }catch(err){
        console.error(err)
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