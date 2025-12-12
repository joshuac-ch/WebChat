
import { Button } from '@/components/ui/button'
import CreateLogin from './Components/CreateLogin'
import { Link } from 'react-router-dom'

export default function LonginPage() {
  return (
    <>
   <div className="h-200 overflow-hidden bg-zinc-900 w-400 rounded-2xl ">
        <div className="text-white flex flex-row justify-around items-center pt-4 gap-10">
          <Link to={"/sing"}>
          <Button variant={'ghost'} className='cursor-pointer'>Regresar</Button>
          </Link>
         <h2 className='text-2xl text-cyan-500'>Welcome al login</h2>
         <h1 ></h1>
        </div>
         
        <CreateLogin></CreateLogin>
    </div>
    </>
  )
}
