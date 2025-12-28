import HearderChat from "@/components/HearderChat"
import PlantillaChats from "@/components/PlantillaChats"
import SearchChat from "@/components/SearchChat"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function IndexPersonal() {
  const {id}=useParams()
  const {ShowSpecificUser,datauser}=useSearchStore()
  const {messageChat}=useMessageStore()
  useEffect(()=>{
    ShowSpecificUser(id)
  },[id])
  const [user, setuser] = useState({
       create:datauser.createdAt,
       image:datauser.profile,
     })
     useEffect(()=>{
       if(datauser){
           setuser({create:datauser.createdAt,image:datauser.profile})
       }
     },[datauser])
  return (
    <>
    
        <div className="text-white flex flex-col h-full justify-start w-full">
         <div className="">         
             <HearderChat data={datauser}></HearderChat>
         </div>
         <ScrollArea className="h-full">
          <PlantillaChats mensajes={messageChat} datachat={datauser} fecha_create={user.create} foto={user.image} id={id}></PlantillaChats>
         </ScrollArea>
         
      </div>
      <div className="text-white flex flex-row justify-center">
         <SearchChat></SearchChat>         
      </div>
   
    </>
  )
}
