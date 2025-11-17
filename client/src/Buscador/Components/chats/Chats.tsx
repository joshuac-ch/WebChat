import { useMessageStore } from "@/store/useMessageStore";
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect } from "react"
import { Link } from "react-router-dom";
interface ChatsProps {
  search: string;
}
export default function Chats({search}:ChatsProps) {
  const {ShowUserchat,alluserchat} =useSearchStore()
  const {JoinChat}=useMessageStore()
  useEffect(()=>{
   if(search?.trim()){
     ShowUserchat(search)
   }
  },[search])
  return (
    <>
    <div className="">
        <p>Welcome chats</p>
    </div>
    <div className="">
      {alluserchat.map((u,i)=>{
        return(
          <Link onClick={()=>JoinChat({chatID:u._id})} to={`/chatuser/${u._id}`} className="flex flex-row  items-center gap-4 hover:bg-zinc-700 p-2 mt-4" key={i}>
         
            <div className="">
              <img src={u.profile} className="w-15 h-15 rounded-full object-cover" alt="" />
            </div>
            <div className="">
              <p>{u.name}</p>
             
            </div>
         
          </Link>
        )
      })}
    </div>
    </>
  )
}
