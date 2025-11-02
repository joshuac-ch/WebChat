import { useUserStore } from "@/store/useUserStore"

import {  Paperclip, Send, Smile } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { toast, Toaster } from "sonner"
import { axiosIntance } from "@/lib/axios"

export default function SearchComponent({channelID,userID}) {
  const {userA,FectUserSpecific}=useUserStore()   
  
  useEffect(()=>{
    FectUserSpecific(userA?._id)
  },[FectUserSpecific,userA?._id]) 
  const [DataFormMessage, setDataFormMessage] = useState({
    content:"",
    User:userID,
    channel:channelID
  })
  const CreteMessage=async()=>{
    console.log(DataFormMessage)
    try{
        if(!DataFormMessage.content){
            toast.error("No se envio ningun mensaje")
        }
        await axiosIntance.post("/message/c/messagechannel",DataFormMessage)
        toast.message("Se envio el mensaje")
        setDataFormMessage((prev)=>({
            ...prev,
            content:""        
    }))
    }catch(err){
        console.error(err)
        
    }
  }
  return (
   <>
   <Toaster></Toaster>
   <div className="flex flex-col">
        <div className="border-white/20 border-t-1 w-full mb-2 "></div>
        <div className="flex flex-row items-center mb-4 gap-2">  
            <div className="bg-zinc-800 p-1 rounded-2xl w-180 flex flex-row items-center justify-between">    
                <div className="flex flex-row items-center gap-2 ">
                    <div className="">
                        <img src={userA?.profile} className="w-12 h-12 object-cover rounded-full" alt="" />
                        
                    </div>
                    <div className="">
                        <Smile className="w-8 h-8"></Smile>
                    </div>
                </div>        
            
                <div className="w-full max-w-140 ">
                        <Input value={DataFormMessage.content} onChange={(e)=>setDataFormMessage({...DataFormMessage,content:e.target.value})} placeholder="Message"></Input>
                    </div>
                <div className="">
                    <Paperclip></Paperclip>
                </div>
            </div>
            <div onClick={CreteMessage} className="bg-indigo-500 p-2 rounded-full">         
                    <Send className="w-8 h-8"></Send>        
            </div>
        </div>
   </div>    
   </>
  )
}
