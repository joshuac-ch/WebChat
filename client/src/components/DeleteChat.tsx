import { Delete } from 'lucide-react'

import { Button } from './ui/button'
import { axiosIntance } from '@/lib/axios'
import { toast } from 'sonner'

export default function DeleteChat({id}) {
   const DeleteChat=async(id)=>{
    try{
        await axiosIntance.delete(`/channel/chat-delete/${id}`)
        toast.message("Se elimino el chat correctamente")
    }catch(err){
        console.error(err)
         toast.error("Se elimino el chat correctamente")
    }
   }
  return (
   <>
   <div className="">
    <Button className='bg-red-400' onClick={()=>DeleteChat(id)} variant={'ghost'}>
        <Delete></Delete>
    </Button>
   </div>
   </>
  )
}
