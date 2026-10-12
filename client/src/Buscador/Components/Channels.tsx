import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react"
import { Link } from "react-router-dom"

interface ChatsProps {
  search: string;
}
export default function Channels({search}:ChatsProps) {
  const {showChannels,FechAllChannel}=useSearchStore()
  const {userA}=useUserStore()
  useEffect(()=>{
    FechAllChannel(search)
    },[FechAllChannel,search])
  const {JoinChannel}=useMessageStore()  
  return (
    <>
    <div className="m-4">
        <p className="font-semibold text-start">Canales Disponibles:</p>
        {showChannels.map((s,i)=>{
          const cate=s.categoria=="canal"
          return(
            cate&&(
              <Link to={`/channel/${userA._id}/${s._id}`} onClick={()=>JoinChannel({canalID:s._id})} className="p-2 mt-4 flex flex-row items-center gap-4 hover:bg-zinc-700 rounded-md" key={i}>            
              <div className="">
               <img src={s.image} className="w-15 h-15 rounded-full object-cover" alt="" />
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
