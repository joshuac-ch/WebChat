import { useUserStore } from "@/store/useUserStore"
import {  Paperclip, Send, Smile } from "lucide-react"
import { Toaster } from "sonner"
import { Input } from "./ui/input"
import { useState } from "react"
import { useMessageStore } from "@/store/useMessageStore"
import Clip from "./ToolsChat/Clip"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import SendMessageFile from "./SendMessageFile"
import { Button } from "./ui/button"
//Componente Input para usuarios
export default function SearchChat({channelID}) {
  const {userA}=useUserStore()
  const [DataFormMessage, setDataFormMessage] = useState({
    content:""
  })
  const [previewImg, setpreviewImg] = useState(null)
  const [estadoDialog, setestadoDialog] = useState(false)
  const [imageFile, setimageFile] = useState<File|null>(null)
  const {SendMessageChat}=useMessageStore()
  
  return (
   <>
   <Toaster></Toaster>
   <Dialog open={estadoDialog} onOpenChange={setestadoDialog}>    
    <DialogContent className="bg-zinc-900 text-white">
        <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>            
        </DialogHeader>
        {previewImg&&(
                    <img src={previewImg} className="w-full h-full rounded-md" alt="" />
                    
                )}
            <SendMessageFile img={imageFile} channelID={channelID}></SendMessageFile>
        <DialogFooter className="text-black">
            <Button onClick={()=>{
                setpreviewImg(null)
                setestadoDialog(false)}}  variant="outline">Cancel</Button>      
        </DialogFooter>          
    </DialogContent>
     
    </Dialog>
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
                    <Clip onPreview={setpreviewImg} OnFile={setimageFile} OnState={setestadoDialog}></Clip>
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
