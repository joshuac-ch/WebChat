import { create } from "zustand";
import {io} from "socket.io-client"
import { useUserStore } from "./useUserStore";
interface MessageStore{
    initialSocket:any
    messagebyChannel:any[]
    listsaludoSockect:()=>Promise<void>
    //fecthMessageByChannel:()=>Promise<void>
    onlineUsers:Set<String>
    JoinChannel:({canalID})=>Promise<void>
}
const socket=io("http://localhost:3500")
export const useMessageStore=create<MessageStore>((set,get)=>({
    
    initialSocket:null,
    messagebyChannel:[],
    onlineUsers:new Set(),
    listsaludoSockect:()=>{
        const {userA} =useUserStore.getState()
        if(!userA._id)return console.warn("No hay usuario logueado aun")
        if(!socket.hasListeners("connect")){
            socket.on("connect",()=>{
            console.log("hola de nuevo user",socket.id)           
            })
        }
        socket.emit("userConectadoSocket",userA._id)       
    },
    JoinChannel:({canalID})=>{
        const {userA}=useUserStore.getState()
        socket.emit("joinchannel",{canalID:canalID,userID:userA._id})
        socket.on("MostrarMessages",(mensajes)=>{
            console.log(mensajes)
        })
    }
        
}))