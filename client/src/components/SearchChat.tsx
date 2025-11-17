import { useUserStore } from "@/store/useUserStore"
import {  Paperclip, Send, Smile } from "lucide-react"
import { Toaster } from "sonner"
import { Input } from "./ui/input"
import { useState } from "react"
import { useMessageStore } from "@/store/useMessageStore"

export default function SearchChat() {
  const {userA}=useUserStore()
  const [DataFormMessage, setDataFormMessage] = useState({
    content:""
  })
  const {SendMessageChat}=useMessageStore()
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
            <div onClick={()=>SendMessageChat(DataFormMessage)} className="bg-indigo-500 p-2 rounded-full">         
                    <Send className="w-8 h-8"></Send>        
            </div>
        </div>
   </div>    
   </>
  )
}
