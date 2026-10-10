import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LeftButtonComponent from "@/hooks/LeftButtonComponent";
import { axiosIntance } from "@/lib/axios";
import { BlocksIcon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function RightLayout({data,Onclose}) {
    const [EditFormChannel, setEditFormChannel] = useState({
        title:data.title,
        description:data.description,
        tipo:data.tipo,
    })
    const imageref=useRef<HTMLInputElement>(null)
    const [imageFile, setimageFile] = useState<File|null>(null)
    const [imagePreview, setimagePreview] = useState(data.image)
    const handleImage=(e)=>{
        const file=e.target.files?.[0]
        if(file){
            let url=URL.createObjectURL(file)
            setimageFile(file)
            setimagePreview(url)
        }        
    }
    const UpdateChannel=async()=>{        
        try{
            const formData=new FormData()
            formData.append("title",EditFormChannel.title)
            formData.append('description',EditFormChannel.description)
            formData.append("tipo",EditFormChannel.tipo)
            if(imageFile){
                formData.append("image",imageFile)
            }
           await axiosIntance.put(`/channel/update/${data._id}`,formData,{
            headers:{"Content-Type":"multipart/form-data"}            
           })
           toast.success("Se actualizo el canal")
        }catch(err){
            toast.error("hubo un error",err.message)
        }
    }
  return (
   <>
   <div className="bg-zinc-800 h-full">
        <div  className="flex flex-row justify-between items-center px-2">
            <div className="flex flex-row items-center gap-2 ">
                <div className="cursor-pointer" onClick={()=>Onclose(false)}>
                    <LeftButtonComponent></LeftButtonComponent>
                </div>
                <p className="font-semibold text-[14px]">Editar</p>
            </div>
            <div className="">
                <Button onClick={UpdateChannel}
                className="cursor-pointer"
                variant={'ghost'}>Guardar</Button>
            </div>
        </div>
        <div className="">
            <div className="flex justify-center">           
                {imagePreview&&(                                  
                        <img src={imagePreview} className="w-30 h-30 object-cover rounded-full" alt="" />                 
                )}        
            </div>
            <div className="mt-4">
                <input type="file" onChange={handleImage} ref={imageref} className="hidden" name="" id="" />
            </div>
            <div className="">
                <Button variant={'ghost'}
                className="cursor-pointer"
                onClick={()=>imageref.current?.click()} >Seleccionar imagen</Button>
            </div>
        
        <div className="flex flex-col text-start">
            <div className="p-4">
            <label htmlFor="" className="text-[14px] font-semibold">Nombre del canal</label>
            <Input value={EditFormChannel.title} onChange={(e)=>setEditFormChannel({...EditFormChannel,title:e.target.value})}></Input>
        </div>
        <div className="p-4">
            <label htmlFor="" className="text-[14px] font-semibold">Descripcion</label>
            <Input value={EditFormChannel.description} onChange={(e)=>setEditFormChannel({...EditFormChannel,description:e.target.value})}></Input>
        </div>
        <div className="p-4">
            <Button>
                <div className="flex flex-row gap-4 items-center">
                    <BlocksIcon></BlocksIcon>
                    <div className="p-4">
                        
                        <p>Canal {data.tipo}</p>
                    </div>
                </div>
            </Button>
        </div>
        <div className="p-4">
            <label htmlFor="" className="text-[14px] font-semibold">Miembros:</label>
            <div className="">
                <p>{data?.miembros.length} actuales</p>
            </div>
        </div>
        <div className="p-4">
            <label htmlFor="" className="text-[14px] font-semibold">Administrador:</label>
            <p>{data.miembros[0]}</p>
        </div>
        </div>
        </div>
   </div>
   </>
  )
}
