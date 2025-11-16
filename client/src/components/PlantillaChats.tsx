import { ArrowUpRight } from "lucide-react"
import SearchComponent from "./SearchComponent"

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useUserStore } from "@/store/useUserStore"
import HearderChat from "./HearderChat"
import { Button } from "./ui/button"
import { useState } from "react"
import { axiosIntance } from "@/lib/axios"
import { toast } from "sonner"

export default function PlantillaChats({datachat,fecha_create,foto,mensajes,id}) {
    const {userA}=useUserStore()
    const [iniciar, setiniciar] = useState(false)    
    const CreateChat=async()=>{
        try{
            await axiosIntance.post(`/users/chat/private/${userA._id}/${datachat._id}`,{
                title:datachat.name,
                image:datachat.profile,
                description:"..."
            })
            toast.message("Se creo el chat")
            setiniciar(true)
        }catch(err){
            console.error(err.message)
            toast.error("ocurrio un error")
        }
    }
  return (
    <div className="text-white flex flex-col h-200 justify-start w-full">
       <div className="">
           <HearderChat data={datachat}></HearderChat>
       </div>
       <div className="h-165">
       <ScrollArea className='h-full'>
        <div className="h-full flex flex-col justify-start">
            <div className="">
                <Button onClick={CreateChat}>Iniciar Chat</Button>
            </div>
            {iniciar&&(
                 <div className="">
                    <div className="mt-4">
                        <p>{new Date(fecha_create).toLocaleDateString()??""}</p>
                        <p className='mt-4'>Chat Creado</p>
                    </div>
                    <div className="mt-4 flex flex-col items-center">                        
                        <img src={foto} className='mt-2 w-50 h-50 object-cover rounded-full' alt="" />
                    </div>
                 </div>
            )}
          <div className="flex flex-col gap-3 px-12 p-4 items-start">
              {mensajes?.length>0?
              mensajes.map((m,i)=>{
                return(
                  <div key={i} className="relative flex flex-row items-end group">
                    <div  className='relative p-2 rounded-md max-w-100 min-w-25 min-h-15  bg-zinc-800'>
                    <p className='text-start'>{m.content}</p>
                    <div className="">
                      <p className='text-end text-[13px] text-gray-500'>{new Date(m.createdAt).getFullYear()}</p>
                    </div>
                    
                  </div>
                  <div className="cursor-pointer ml-2 border-2  border-white/20 bg-zinc-800 rounded-md hidden group-hover:block transition-all duration-300 ">
                      <ArrowUpRight />
                    </div>
                  </div>
                )
              })
              :
              "cargando..."}
          </div>
        </div>
       </ScrollArea>
       </div>
       <div className="flex flex-row justify-center">
          <SearchComponent userID={userA?._id} channelID={id}></SearchComponent>
       </div>
    </div>
  )
}
