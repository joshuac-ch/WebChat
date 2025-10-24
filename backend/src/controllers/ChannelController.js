import { ChannelModel } from "../models/chanalesModel.js"
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
        const channel=await ChannelModel.create({
            title,description,image,miembros
        })
        res.status(200).json(channel)
    }catch(err){
        console.error(err)
        next(err)
    }
}