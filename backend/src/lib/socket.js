import { Server, Socket } from "socket.io";
import { Messagemodel } from "../models/messageModel.js";

export const InitialSoeckt=(server)=>{
    const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173"
        
    }})
    const userSokect=new Map()
    io.on("connect",(sokect)=>{
        console.log("Nuevo usuario",sokect.id)
        sokect.on("userConectadoSocket",(userID)=>{
            userSokect.set(userID,sokect.id)
            console.log(`Bienvenido userID ${userID} del socket ${sokect.id}`)
        })
        sokect.on("joinchannel",async({canalID,userID})=>{
            sokect.join(canalID)
            console.log(`El usuario ${userID} se unio al ${canalID}`)
            const message=await Messagemodel.find({channel:canalID})
            sokect.emit("mostrarMessage",message)            
        })
        sokect.on("joinchat",async({chatID,userID})=>{
            sokect.join(chatID)
            console.log(`El userID ${userID} se unio al canal ${chatID}`)
            const messagesChat=await Messagemodel.find({channel:chatID})
            sokect.emit("MostrarMessageChat",messagesChat)
        })
        sokect.on("leavechat",({chatID,userID})=>{
            sokect.leave(chatID)
            console.log("Se salio del chat personal ")
        })
        sokect.on("leavechannel",({canalID,userID})=>{
            console.log(`El usuario ${userID} salio del canal ${canalID}`)
              console.log("Se salio del chat grupal  ")
            sokect.leave(canalID)
        })
        sokect.on("SendMessageChat",async(data)=>{
            const {content,User,channel}=data
            const messagesChat=await Messagemodel.create({
                content,
                User,
                channel
            })
           
            io.to(channel).emit("RevivedMessageChat",messagesChat)
        })
        sokect.on("CreateMessage",async(data)=>{
            const {content,User,channel}=data
            const createMessage=await Messagemodel.create({
                content,
                User,
                channel
            })        
            //para que todos los del grupo lo reciban    
            io.to(channel).emit("RecivedMessage",createMessage)
        })
    })
}
