import { userModel } from "../models/userModel.js";
import multer from "multer";
import cloudinary from "../lib/cloudnary.js";
import fs from "fs"
import { ChannelModel } from "../models/chanalesModel.js";
export const CreateUsuariosID=async(req,res,next)=>{
    try{        
        const {name,last_name,number,email,password,profile}=req.body
        const user=await userModel.create({
            name,
            last_name,
            number,
            email,
            password,
            profile
        })
        if(user){
            await ChannelModel.create({
                title:"Saved Messages",
                description:"",
                image:"https://res.cloudinary.com/dvxnngyrr/image/upload/v1762302890/1072313-12926_qplstv.jpg",
                miembros:user._id,
                tipo:"privado"
            })
        }
        res.status(200).json({message:"Se creo el usuario",user})
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const UserSpecific=async(req,res,next)=>{
    try{
        const {id}=req.params
        const userSpecific=await userModel.findById(id)
        if(!userSpecific){
            return res.status(404).json({message:"No se encontro el usuario"})
        } 
        res.status(200).json(userSpecific)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const GetUserID=async(req,res,next)=>{
    try{
        const {id}=req.params
        const userSpecific=await userModel.findById(id)
        if(!userSpecific){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res.status(200).json(userSpecific)
    }catch(err){
        console.error(err)
        next(err)
    }
    
}
export const GetAllUser=async(req,res,next)=>{
    try{
        const usuarios=await userModel.find()
        if(!usuarios||usuarios.length==0){
            return res.status(404).json({message:"No se encontraron los usuarios"})
        }
        res.status(200).json(usuarios)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const Login=async(req,res,next)=>{
    try{
        const {email,password}=req.body
        const verifyUser=await userModel.findOne({email,password})
        if(!verifyUser){
            return res.status(404).json({message:"No se encontro el usuario"})
        }
        res.status(200).json(verifyUser)
    }catch(err){
        console.error(err)
        next(err)
    }
}
export const UploadCloudnary=async(filePath,folder="uploads")=>{
    try{
        const result=await cloudinary.uploader.upload(filePath,{
             folder,
             allowed_formats: ["jpg", "png", "jpeg", "webp"],
             transformation: [{ width: 800, height: 800, crop: "limit" }],      
        })
        
        return result.secure_url
    }catch(err){
        console.error(err)
       
    }
}
export const EditUser=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,last_name,profile,bio}=req.body
        let frase=["a","e","i","o","u","N","C","A","G","5","1","3","4"]       
        let username=name.slice(0,2)+last_name.slice(3,4)+"_"+frase[Math.floor(Math.random())]
        let imageURL=profile;
        if(req.file){
            imageURL = await UploadCloudnary(req.file.path, "users");
             // Borramos el archivo local temporal
            fs.unlinkSync(req.file.path);
        }
        const EditForm={
            name,
            last_name,    
            bio,       
            username, 
            profile:imageURL
        }
        const UpdateUser=await userModel.findByIdAndUpdate(id,EditForm,{new:true})
        res.status(200).json(UpdateUser)
    }catch(err){
        console.error(err)
       
    }
}
