import { userModel } from "../models/userModel.js";
import multer from "multer";
import cloudinary from "../lib/cloudnary.js";
import fs from "fs"
import { ChannelModel } from "../models/chanalesModel.js";
export const CreateUsuariosID=async(req,res,next)=>{
    try{        
        const {name,last_name,number,email,password,profile}=req.body
        let frase=["a","e","i","o","u","N","C","A","G","5","1","3","4"]       
        let iconsUsers=["https://i.pinimg.com/736x/9e/62/b0/9e62b0a0716c905d2e4dd5d6eb6a20dd.jpg",
            "https://i.pinimg.com/1200x/c4/fa/55/c4fa5592d75079ead60074ab766a9699.jpg",
            "https://i.pinimg.com/736x/ee/05/07/ee05078f5829ddc80ff029accb07a4c0.jpg",
            "https://i.pinimg.com/736x/93/c9/02/93c9029bc3786a09e388d989a4290055.jpg",
            "https://i.pinimg.com/736x/4f/bc/7c/4fbc7cecacaec224436b811e8f64f185.jpg",
            "https://i.pinimg.com/736x/cf/99/41/cf9941003f49ac0c192c3f4b3f3de679.jpg",
            "https://i.pinimg.com/736x/a7/71/6d/a7716dc9079017ea2b71ebf1953828a3.jpg",
            "https://i.pinimg.com/736x/46/83/9c/46839c09a19ab8b87364ee1af806de12.jpg"
        ]
        const randomIconDefault=Math.floor(Math.random()*iconsUsers.length)
        let username=name.slice(0,2)+last_name.slice(3,4)+"_"+frase[Math.floor(Math.random())]
        const user=await userModel.create({
            name,
            last_name,
            number,
            email,
            password,
            profile:iconsUsers[randomIconDefault],
            username:username
        })
        if(user){
            await ChannelModel.create({
                title:"Saved Messages",
                description:"",
                image:"https://res.cloudinary.com/dvxnngyrr/image/upload/v1762302890/1072313-12926_qplstv.jpg",
                miembros:user._id,
                tipo:"privado",
                categoria:"personal"
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
export const SearchChatTest=async(req,res)=>{
    try{      
        const {id}=req.params
        const modelo=await userModel.findById({_id:id})
        if(!modelo){
            return res.status(404).json({message:"No se encontro el id"})
        }
        res.status(200).json(modelo)
    }catch(err){{
        console.error(err)
    }}
}
export const SearchSpecificChat=async(req,res)=>{
    try{
        const {id}=req.params
        const chats=await ChannelModel.find({miembros:id,categoria:"chat"})
        if(!chats){
            return res.status(404).json({message:"No se encontraron coincidencias"})
        }
         // 2. Encontramos EL chat que tiene 2 miembros (tú + otra persona)
        const chatPrivado = chats.find(c => c.miembros.length === 2);
        
        // 3. Sacamos el otro integrante
        const otherUserId = chatPrivado?.miembros.find(u => u.toString() !== id);

        // 4. Obtenemos el chat completo usando $all ✔
        const chatCompleto = await ChannelModel.findOne({
            miembros: { $all: [id, otherUserId] },
            categoria: "chat"
        });
        const usercomplete=await userModel.findOne({_id:otherUserId})
       return res.status(200).json({
            ok: true,
            yo: id,
            con: otherUserId,
            chat: chatCompleto,
            user:usercomplete
        });
    }catch(err){
        console.error(err)
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
export const SearchUserChat=async(req,res,next)=>{
    try{
        const {user}=req.params
        const searchchat=await userModel.find({name:{$regex:user,$options:"i"}})
        if(!searchchat){
            return res.status(404).json({message:"No se encontraron coincidencias"})
        }
        res.status(200).json(searchchat)

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
export const CreateChatUser=async(req,res,next)=>{
    try{    
        const {usera,userb}=req.params
        const {title,image,description,miembros,tipo}=req.body
        const existe=await ChannelModel.findOne({categoria:"chat",miembros:{$all:[usera,userb]}})
        if(existe){
            console.log("ya existe")
            return res.status(200).json(existe)
        }        
        const chatuser=await ChannelModel.create({
            title,
            image,
            description,
            miembros:[usera,userb],
            tipo:"privado",
            categoria:"chat"            
        })       
         console.log("se creo")
        return res.status(201).json(chatuser)
    }catch(err){
        console.error(err)
        next(err)
    }
}

export const EditUser=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,last_name,profile,bio}=req.body
        //let frase=["a","e","i","o","u","N","C","A","G","5","1","3","4"]       
        //let username=name.slice(0,2)+last_name.slice(3,4)+"_"+frase[Math.floor(Math.random())]
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
            //username, 
            profile:imageURL
        }
        const UpdateUser=await userModel.findByIdAndUpdate(id,EditForm,{new:true})
        res.status(200).json(UpdateUser)
    }catch(err){
        console.error(err)
       
    }
}
