import PlantillaChats from "@/components/PlantillaChats"
import { useMessageStore } from "@/store/useMessageStore"
import { useSearchStore } from "@/store/useSearchStore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ChatSpecific() {
  const {userid}=useParams()
  const {ShowSpecificUser,datauser}=useSearchStore()  
  useEffect(()=>{
    ShowSpecificUser(userid)
  },[userid])
  const [user, setuser] = useState({
    create:datauser.createdAt,
    image:datauser.profile,
  })
  useEffect(()=>{
    if(datauser){
        setuser({create:datauser.creatdAt,image:datauser.profile})
    }
  },[datauser])
  const {messageChat}=useMessageStore()
  return (
    <>
     <PlantillaChats mensajes={messageChat} datachat={datauser} fecha_create={user.create} foto={user.image} id={userid}></PlantillaChats>
    </>
  )
}
