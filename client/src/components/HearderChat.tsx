import { Ellipsis, Search } from "lucide-react";


export default function HearderChat({data}) {
  return (
     <div className="pt-2 pb-2 pl-6 pr-6 bg-zinc-800 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
            <div className="">
                <img src={data.profile} className='rounded-full h-13 w-13 object-cover' alt="" />
            </div>
            <div className="">
                <p className='text-start text-xl' >{data.name}</p>                
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
