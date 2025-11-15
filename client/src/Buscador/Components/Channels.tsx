import { useSearchStore } from "@/store/useSearchStore"
import { useEffect } from "react"


export default function Channels({search}) {
  const {showChannels,FechAllChannel}=useSearchStore()
  useEffect(()=>{
    FechAllChannel(search)
    },[FechAllChannel,search])
  return (
    <>
    <div className="m-4">
        <p>Bienvenido a canales</p>
        {showChannels.map((s,i)=>{
          return(
            <div className="p-2 mt-4 flex flex-row items-center gap-4 hover:bg-zinc-700 rounded-md" key={i}>
             <div className="">
              <img src={s.image} className="w-15 h-15 rounded-full" alt="" />
             </div>
             <div className="text-start">
               <p>{s.title}</p>
              <p>{s.description}</p>
             </div>
            </div>
          )
        })}
    </div>
    </>
  )
}
