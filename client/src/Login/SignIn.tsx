import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { axiosIntance } from '@/lib/axios'
import { AuthUserContext } from '@/UserProvider/UserProvide'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import telegramIcon from "../assets/telegram.svg"
import { toast, Toaster } from 'sonner'
export default function SignIn() {
    const {setUser}=useContext(AuthUserContext)
    const navegate=useNavigate()
    const [userLogin, setuserLogin] = useState({
        email:"nino@gmail.com",
        password:""
    })
    const onLogin=async()=>{
        try{
            const {data}=await axiosIntance.post("/users/v",userLogin)
            console.log("usuario existente",data)
            setUser(data) 
            navegate("/")          
        }catch(err){
            
            toast.error("Usuario no encontrado")
        }
    }
  return (
   <>
   <Toaster></Toaster>
    <div className="text-white ">
        <div className="flex items-center justify-center">
            <img className='h-80 w-80 ' src={telegramIcon} alt="" />
            
        </div>
        <div className="mb-8">
            <p className='text-4xl font-semibold'>Iniciar Session en Telegram</p>
        </div>
    <div className="flex flex-col items-center">
            <div className="flex flex-col">
        <p className='text-start'>Iniciar Session</p>
       <Input 
       className='w-80'
       onChange={(e)=>setuserLogin({...userLogin,email:e.target.value})} value={userLogin.email}></Input>
    </div>
     <div className="flex flex-col mt-4 ">
        <p className='text-start'>Contraseña</p>
       <Input 
       className='w-80'
       onChange={(e)=>setuserLogin({...userLogin,password:e.target.value})} value={userLogin.password}></Input>
    </div>
    <div className="mt-4">
        <Button className='w-80 bg-indigo-500' onClick={onLogin}>Iniciar Session</Button>
    </div>
    </div>
    </div>
   </>
  )
}
