import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function Channels({search}) {
  const {showChannels,FechAllChannel}=useSearchStore()
  useEffect(()=>{
    FechAllChannel(search)
    },[FechAllChannel,search])
  const {JoinChannel}=useMessageStore()  
  return (
    <>
    <div className="m-4">
        <p>Bienvenido a canales</p>
        {showChannels.map((s,i)=>{
          const cate=s.categoria=="canal"
          return(
            cate&&(
              <Link to={`/channel/${s._id}`} onClick={()=>JoinChannel({canalID:s._id})} className="p-2 mt-4 flex flex-row items-center gap-4 hover:bg-zinc-700 rounded-md" key={i}>            
              <div className="">
               <img src={s.image} className="w-15 h-15 rounded-full" alt="" />
              </div>
              <div className="text-start">
                <p>{s.title}</p>
               <p>{s.description}</p>
              </div>            
            </Link>
            )
          )
        })}
    </div>
    </>
  )
}
