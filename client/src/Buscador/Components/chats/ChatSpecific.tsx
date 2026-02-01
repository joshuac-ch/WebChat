import HearderChat from "@/components/HearderChat"
import PlantillaChats from "@/components/PlantillaChats"
import RigthLayoutUser from "@/components/RigthLayoutUser"
import SearchChat from "@/components/SearchChat"
import { ScrollArea } from "@/components/ui/scroll-area"
import RightLayout from "@/layout/components/RightLayout"
import { useHomeStore } from "@/store/useHomeStore"
import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ChatSpecific() {
  const {userid,id}=useParams()
  const {ShowSpecificUser,ShowConnectAnotherUser,connectuser,datauser}=useSearchStore()  
  const {FecthChannelAll,channels}=useHomeStore()
  
  useEffect(()=>{
    //ShowSpecificUser(userid)
    if(id && userid){
      ShowConnectAnotherUser(id,userid)
    }
    //FecthChannelAll()
  },[id,userid])
  const [user, setuser] = useState({
    create:connectuser.createdAt,
    image:connectuser.profile,
  })
 
  useEffect(()=>{
    if(connectuser){
        setuser({create:connectuser.createdAt,image:connectuser.profile})
    }
  },[connectuser])
  const {messageChat}=useMessageStore()  
  
  const [righstate, setrighstate] = useState(false)
  console.log(connectuser)
  return (
    <>
     <div className="text-white flex flex-col h-full justify-start w-full">
        <div className="">         
            <HearderChat data={connectuser} setrigthstate={setrighstate}></HearderChat>
        </div>
        <div className={`${righstate?"grid grid-cols-2":""}`}>
          <ScrollArea className="h-full">
            <PlantillaChats mensajes={messageChat} datachat={connectuser} fecha_create={user.create} foto={user.image} id={id}></PlantillaChats>
          </ScrollArea>
         <div className="">     
            {righstate&&(
              <RigthLayoutUser data={connectuser}  Onclose={setrighstate}></RigthLayoutUser>
            )}     
          </div>
        </div>
     </div>
     <div className="text-white flex flex-row justify-center">
        <SearchChat></SearchChat>         
     </div>
    
    </>
  )
}
