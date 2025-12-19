import { Smile } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useMessageStore } from "@/store/useMessageStore";
import { toast } from "sonner";
import { axiosIntance } from "@/lib/axios";


export default function SendMessageFile({img,channelID}) {
    const {userA}=useUserStore()
    
    const {SendMessageFile}=useMessageStore()
    const [messageData, setmessageData] = useState({
        imageURL:img,
        content:"",
        type:"mix",
        channelID:channelID,
        User:userA._id
    })
    //crear aca el Form para enviar los datos al backend y socketIO solo los muestre
    const SendMessageFileForm=async()=>{
        try{
          const formdata=new FormData()
          if(!messageData.imageURL){
            toast.message("Por favor poner una imagen")
          }
          formdata.append("imageURL",messageData.imageURL)
          formdata.append("content",messageData.content)
          formdata.append("channel",messageData.channelID)
          formdata.append("User",messageData.User)
          await axiosIntance.post("/message/c/messageFile",formdata,{headers:{"Content-Type":"multipart/form-data"}})
          toast.message("Se envio el mensaje")
        }catch(err){
          toast.error("Hubo un error",err) 
        } 
    }
  return (
    <div className="flex flex-row items-center gap-2">
                <Smile className="w-10 h-10"></Smile>
            <Input placeholder="Agregar mensaje" value={messageData.content} onChange={(e)=>setmessageData({...messageData,content:e.target.value})}></Input>  
            <div className="">
                <Button className="bg-indigo-500 hover:bg-indigo-400" onClick={SendMessageFileForm} >Enviar</Button>
            </div>  
    </div>
  )
}
