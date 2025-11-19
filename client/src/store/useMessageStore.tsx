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
    messagesChannel:any[]
    currentchannel:null,    
    setMessagesChannel:(messagesChannel:string[])=>Promise<void>
    SendMessage:()=>Promise<void>

    messsagesChat:any[]
    setMessageChat:(messagesChat:string[])=>Promise<void>

    JoinChat:({chatID})=>Promise<void>
    currentchat:null
    messageChat:any[]
    SendMessageChat:()=>Promise<void>
}
const socket=io("http://localhost:3500")
export const useMessageStore=create<MessageStore>((set,get)=>({
    currentchannel:null,
    currentchat:null,
    initialSocket:null,
    messagebyChannel:[],
    messagesChannel:[],
    setMessagesChannel:(messagesChannel)=>set({messagesChannel}),
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
        const prev=get().currentchannel
        if(prev && prev==canalID) return
        if(prev){
            socket.emit("leavechannel",{canalID:prev,userID:userA._id})
        }
        socket.off("mostrarMessage")
        socket.off("RecivedMessage")
        set({messagesChannel:[],currentchannel:canalID})
        socket.emit("joinchannel",{canalID:canalID,userID:userA._id})
        console.log("nuevo canal",canalID)
        //set({currentchannel:canalID})
        socket.on("mostrarMessage",(msg)=>{
            set({messagesChannel:msg})
        })
        socket.on("RecivedMessage",(mensajeRecibido)=>{
            set((prev)=>({
                messagesChannel:[...prev.messagesChannel,mensajeRecibido]
            }))
        })

    },
    JoinChat:({chatID})=>{
        const {userA}=useUserStore.getState()
        const prev=get().currentchat
        if(prev && prev==chatID)return;
        if(prev){
            socket.emit("leavechat",{chatID:prev,userID:userA._id})
        }
        socket.off("MostrarMessageChat")
        socket.off("RevivedMessageChat")
        set({messageChat:[],currentchat:chatID})
        socket.emit("joinchat",{chatID:chatID,userID:userA._id})
        socket.on("MostrarMessageChat",(msg)=>{
            set({messageChat:msg})
        })
        socket.on("RevivedMessageChat",(msgRecived)=>{
            set((prev)=>({
                messageChat:[...prev.messageChat,msgRecived]
            }))
        })
    } , 
    SendMessageChat:(data)=>{
        const {currentchat}=useMessageStore.getState()
        const {userA}=useUserStore.getState()

        socket.emit("SendMessageChat",{
            ...data,
            User:userA._id,
            channel:currentchat
        })
    },
    //problema que hubo con el enviar el mensaje a otros se debia a que no se 
    // actualizaba el chanel id como pensabamos teniamos que enviar el currentchanmnel
    SendMessage:(data)=>{
        const {currentchannel}=useMessageStore.getState()
       
        const {userA}=useUserStore.getState()
        socket.emit("CreateMessage",{
            ...data,
            User:userA._id,
            channel:currentchannel
        })
    }
        
}))