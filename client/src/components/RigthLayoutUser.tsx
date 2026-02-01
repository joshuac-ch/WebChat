import LeftButtonComponent from "@/hooks/LeftButtonComponent";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function RigthLayoutUser({data,Onclose}) {
    const [imagePreview, setimagePreview] = useState(null)
  return (
    <>
     <div className="bg-zinc-800 h-full">
        <div  className="flex flex-row justify-between items-center px-2">
            <div className="flex flex-row items-center gap-2">
                <div className="" onClick={()=>Onclose(false)}>
                <LeftButtonComponent></LeftButtonComponent>
            </div>
            <p>Editar</p>
            </div>
            <div className="">
                <Button variant={'ghost'}>Guardar</Button>
            </div>
        </div>
        <div className="">
        <div className="flex justify-center">
            <img src={data.profile} className="w-full h-40 object-cover" alt="" />
        </div>
        <div className="">
            <p>{data.name} {data.last_name}</p>
        </div>
        
        <div className="flex flex-col text-start">
            <div className="px-4 py-2">
                <label htmlFor="">Nombre</label>
                <Input ></Input>
            </div>
            <div className="px-4 py-2">
                <label htmlFor="">Last name</label>
                <Input ></Input>
            </div>
            <div className="px-4 py-2">
                <label htmlFor="">Phone</label>
                <Input ></Input>
            </div>
            <div className="px-4 py-2">
                <label htmlFor="">Descripcion</label>
                <Input></Input>
            </div>        
            <div className="px-4 py-2">
                <label htmlFor="">Notificaciones</label>                
            </div>
      
        </div>
        </div>
   </div>
    </>
  )
}
