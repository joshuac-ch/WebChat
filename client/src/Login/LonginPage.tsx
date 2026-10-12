
import { Button } from '@/components/ui/button'
import CreateLogin from './Components/CreateLogin'
import { Link } from 'react-router-dom'
import { ChevronLeft, Send } from 'lucide-react'

export default function LonginPage() {
  return (
    <>
   <div className="h-200 overflow-hidden bg-zinc-900 w-400 rounded-2xl ">
        <div className="text-white flex flex-row px-10 pt-4 gap-10">
          <Link to={"/sing"}>
          <Button variant={'ghost'} className='cursor-pointer'>
            <ChevronLeft></ChevronLeft>
            <span> Volver al Login</span>
          </Button>
          </Link>
        </div>
         <div className="text-white">
          <div className="flex items-center justify-center">
            <div className="border-2 p-4 rounded-full border-white/20">
              <Send className='h-10 w-10'></Send>  
            </div>          
          </div>
        <div className="pt-2 mb-8">
            <p className='text-2xl font-semibold'>Crea una cuenta en telegram web</p>
        </div>
          <CreateLogin></CreateLogin>
        </div>
    </div>
    </>
  )
}
