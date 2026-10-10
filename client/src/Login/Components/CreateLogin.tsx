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
    <div className="flex flex-row flex-wrap  text-white gap-2 justify-start items-end pt-8">
       
        <div className="flex flex-row justify-center gap-4 w-full">
            <div className="flex flex-col items-start">
                <label htmlFor="" className='my-2 font-semibold text-[14px]' >
                    Nombre
                    <span className='text-indigo-400'> *</span>
                </label>
                <Input value={FormLoginUser.name}
                required
                onChange={(e)=>setFormLoginUser({...FormLoginUser,name:e.target.value})} 
                className='w-50 h-12 border-white/20' placeholder='Ejem.. Juan'></Input>
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="" className='my-2 font-semibold text-[14px]'>
                    Apellido
                    <span className='text-indigo-400'> *</span>
                </label>
                <Input value={FormLoginUser.last_name}
                required 
                onChange={(e)=>setFormLoginUser({...FormLoginUser,last_name:e.target.value})} 
                className='w-50 h-12 border-white/20' placeholder='Ejem..Tapia'></Input>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4 w-full ">
            <div className="flex flex-col items-start">
                <label htmlFor="" className='my-2 font-semibold text-[14px]'>
                    Correo electronico
                    <span className='text-indigo-400'> *</span>
                </label>
                <Input value={FormLoginUser.email}
                type='email'
                required 
                onChange={(e)=>setFormLoginUser({...FormLoginUser,email:e.target.value})} 
                className='w-105 h-12 border-white/20' placeholder='Ejem...Juantapia@gmail.com'></Input>
            </div>
           
        </div>
        <div className="flex flex-row justify-center items-end  gap-4 w-full">
            <div className="flex flex-col items-start">
                <label htmlFor="" className='my-2 font-semibold text-[14px]'>
                    Password
                    <span className='text-indigo-400'> *</span>
                </label>
                <Input value={FormLoginUser.password} 
                required
                onChange={(e)=>setFormLoginUser({...FormLoginUser,password:e.target.value})} className='w-50 h-12 border-white/20' placeholder='********'></Input>
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="" className='my-2 font-semibold text-[14px]'>
                    Telefono
                    <span className='text-indigo-400'> *</span> 
                </label>
                <Input value={FormLoginUser.number}
                type='tel' required
                maxLength={9} 
                onChange={(e)=>setFormLoginUser({...FormLoginUser,number:e.target.value})} className='w-50 h-12 border-white/20' placeholder='Ejem...991424142'></Input>
            </div>
            
        </div>
        <div className="flex flex-col justify-center items-center  gap-4 w-full">
            <div className="py-4">
               
                    <Button className='cursor-pointer bg-indigo-500 hover:bg-black w-105' onClick={handleSubmit} >Registrarse</Button>                  
                
            </div>
            <div className="flex flex-row gap-2">
                <p>¿Ya tienes una cuenta? </p>
                <span className='text-indigo-400'> Iniciar Session</span>
            </div>
        </div>
        
    </div>
    
    </>
  )
}
