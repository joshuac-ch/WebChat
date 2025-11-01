import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LeftButtonComponent from "@/hooks/LeftButtonComponent"
import { axiosIntance } from "@/lib/axios"
import { useUserStore } from "@/store/useUserStore"
import { Upload } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { toast, Toaster } from "sonner"

export default function CreateChannel() {
  const {miembros,miembrosID}=useUserStore()
  const [imageFileChannel, setimageFileChannel] = useState<File|null>(null)
  const imageInput= useRef<HTMLInputElement>(null)

 
   
  const [imageChannelPreview, setimageChannelPreview] = useState(null)
  const handleImage=(e)=>{
    const selectFile=e.target.files?.[0]
    if(selectFile){
       setimageFileChannel(selectFile)
       setimageChannelPreview(URL.createObjectURL(selectFile)) 
    }
  }
  const [createChannel, setcreateChannel] = useState({
    title:"",
    descripcion:"",     
  })
  const HandleSubmit=async()=>{
    console.log(createChannel)
    console.log(imageFileChannel)
    try{
      const formData=new FormData()
      if(!imageFileChannel){
        return toast.error("Por favor seleecione una imagen")
      }
      formData.append("title",createChannel.title)
      formData.append("description",createChannel.descripcion)
      formData.append("imageFile",imageFileChannel)
      formData.append("miembros",JSON.stringify(miembrosID))
      await axiosIntance.post("/channel/c",formData,{
        headers:{"Content-Type":"multipart/form-data"}
      })
      toast.message("Se creo el canal")
    }catch(err){
      console.error(err)
      toast.error("Hubo un error")
    }
  }
  return (
    <>
    <Toaster></Toaster>
    
    <div className="text-white">
      <div className="p-2 flex flex-row gap-2 items-center ">
        <LeftButtonComponent ruta="channel"></LeftButtonComponent>
        <p className="font-semibold">Nuevo canal</p>
      </div>
      <div className="flex flex-row justify-center">
        <input type="file" className="hidden" ref={imageInput} onChange={(e)=>handleImage(e)} name="" id="" />
          <div onClick={()=>imageInput.current?.click()} className="rounded-full border-2" >
            {imageFileChannel?
            <div className="flex items-center justify-center w-30 h-30">
              <img src={imageChannelPreview} className="w-full h-full object-cover rounded-full" alt="" />
            </div>
            :
            <div className="flex items-center justify-center w-30 h-30">
              <Upload></Upload>
            </div>
            }       
          </div>
      </div>
      <div className="flex flex-col p-4">
           
        <div className="mt-4">
          <Input value={createChannel.title} onChange={(e)=>setcreateChannel({...createChannel,title:e.target.value})} placeholder="nombre del canal"></Input>
        </div>
        <div className="mt-4">
          <Input value={createChannel.descripcion} onChange={(e)=>setcreateChannel({...createChannel,descripcion:e.target.value})} placeholder="descripcion"></Input>
          </div>
        <div className="flex flex-col items-start mt-4">
         <p>{miembros.length} miembros</p> 
          <div className="">
            {miembros.map((m,i)=>{
              return(
                <div key={i} className="mt-4 flex items-center gap-4">
                  <div className="">
                    {m.profile?
                    <img src={m.profile} className="w-10 h-10 rounded-full" alt="" />
                    :
                    <p className="w-10 h-10 border-2 p-1 font-black rounded-full">{m.name.slice(0,1)}</p>
                    }
                  </div>
                  <div className="">
                    <p>{m.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>        
      </div>
     <div className="" >
            <Button onClick={HandleSubmit}>enviar</Button>
     </div>
    </div>
    </>
  )
}
