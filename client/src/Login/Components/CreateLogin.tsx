import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { axiosIntance } from '@/lib/axios'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'


export default function CreateLogin() {
 const [FormLoginUser, setFormLoginUser] = useState({
    name:"",
    last_name:"",
    number:"",
    email:"",
    password:"",
    profile:""
 })
 const handleSubmit=async()=>{
     console.log(FormLoginUser)
   try{
      const formData=new FormData()
      if(!FormLoginUser.name||!FormLoginUser.email||!FormLoginUser.password){
        toast.message("Por favor llenar todos los datos")
      }
      formData.append("name",FormLoginUser.name)
      formData.append("last_name",FormLoginUser.last_name)
      formData.append("number",FormLoginUser.number)
      formData.append("email",FormLoginUser.email)
      formData.append("password",FormLoginUser.password)
      await axiosIntance.post("/users/c",FormLoginUser) 
      toast.success("Nuevo Usuario")
     
        
    }catch(err){
    console.error(err)
    toast.error("Por favor llenar todos los datos")
   }
 }
    return (
    <>
     <div className="">
            <Toaster position={'top-center'} ></Toaster>
     </div>
    <div className="flex flex-row flex-wrap text-white gap-10 justify-start items-end p-8">
       
        <div className="flex flex-col items-start">
            <label htmlFor="" className='mt-4 mb-4' >*Nombre</label>
            <Input value={FormLoginUser.name}
             onChange={(e)=>setFormLoginUser({...FormLoginUser,name:e.target.value})} className='w-150' placeholder='ingrese su nombre'></Input>
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="" className='mt-4 mb-4'>*Apellido</label>
            <Input value={FormLoginUser.last_name} 
            onChange={(e)=>setFormLoginUser({...FormLoginUser,last_name:e.target.value})} className='w-150' placeholder='ingrese un apellido'></Input>
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="" className='mt-4 mb-4'>*Correo electronico</label>
            <Input value={FormLoginUser.email} 
            onChange={(e)=>setFormLoginUser({...FormLoginUser,email:e.target.value})} className='w-150' placeholder='ingrese su correo electronico'></Input>
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="" className='mt-4 mb-4'>*Telefono</label>
            <Input value={FormLoginUser.number} 
            onChange={(e)=>setFormLoginUser({...FormLoginUser,number:e.target.value})} className='w-150' placeholder='ingrese su telefono'></Input>
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="" className='mt-4 mb-4'>*Password</label>
            <Input value={FormLoginUser.password} 
            onChange={(e)=>setFormLoginUser({...FormLoginUser,password:e.target.value})} className='w-150' placeholder='ingrese su nueva contraseña'></Input>
        </div>
        
    </div>
    <div className="p-8 flex justify-start">
        <div className="">
            <Button className='cursor-pointer' onClick={handleSubmit} >Enviar Datos</Button>
        </div>
    </div>
    </>
  )
}
