import { Ellipsis, Search } from 'lucide-react'

export default function HeaderChannel({data}) {
  return (
    <div className="pt-2 pb-2 pl-6 pr-6 bg-zinc-800 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
            <div className="">
                <img src={data.image} className='rounded-full h-13 w-13' alt="" />
            </div>
            <div className="">
                <p className='text-start text-xl' >{data.title}</p>
                <p className='text-start'>{data.miembros?.length} miembros,</p>
            </div>
        </div>
        <div className="flex flex-row gap-6">
            <div className="">
                <Search></Search>
            </div>
            <div className="">
                <Ellipsis></Ellipsis>
            </div>
        </div>
    </div>
  )
}
