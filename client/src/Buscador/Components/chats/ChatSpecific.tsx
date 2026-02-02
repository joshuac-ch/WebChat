import HearderChat from "@/components/HearderChat"
import PlantillaChats from "@/components/PlantillaChats"
import RigthLayoutUser from "@/components/RigthLayoutUser"
import SearchChat from "@/components/SearchChat"
import { ScrollArea } from "@/components/ui/scroll-area"

import { useHomeStore } from "@/store/useHomeStore"
import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ChatSpecific() {
  const {userid,id}=useParams()
  // Ruta de Chat de Usuarios
  // /chatuser/697d546d547e1dc4dc38291e/697d54b7af6bd57f385ec260
  // el primero es el id 697d546d547e1dc4dc38291e
  // el segundo es el userid 697d54b7af6bd57f385ec260
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
        <SearchChat channelID={userid}></SearchChat>         
     </div>
    
    </>
  )
}
