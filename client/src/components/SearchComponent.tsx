import { useUserStore } from "@/store/useUserStore"
import { AuthUserContext } from "@/UserProvider/UserProvide"
import {  Paperclip, Send, Smile } from "lucide-react"
import { useContext, useEffect } from "react"
import { Input } from "./ui/input"

export default function SearchComponent() {
  const {userA,FectUserSpecific}=useUserStore()
  const {user}=useContext(AuthUserContext)
  useEffect(()=>{
    FectUserSpecific(user?._id)
  },[FectUserSpecific,user])
  return (
   <>
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
                        <Input placeholder="Message"></Input>
                    </div>
                <div className="">
                    <Paperclip></Paperclip>
                </div>
            </div>
            <div className="bg-indigo-500 p-2 rounded-full">         
                    <Send className="w-8 h-8"></Send>        
            </div>
        </div>
   </div>    
   </>
  )
}
