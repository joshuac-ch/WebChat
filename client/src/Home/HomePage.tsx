

import { useContext, useEffect } from "react"
import telegramfondo from "../assets/telegram.png"
import { AuthUserContext } from "@/UserProvider/UserProvide"
import { useUserStore } from "@/store/useUserStore"
import { useMessageStore } from "@/store/useMessageStore"


export default function HomePage() {
 
const {user}=useContext(AuthUserContext)  
const {userA}=useUserStore()
const {listsaludoSockect}=useMessageStore()
  const {FectUserSpecific}=useUserStore()
      useEffect(()=>{
         if(user?._id){
           FectUserSpecific(user?._id)
                   
         }
      },[FectUserSpecific,listsaludoSockect,user])
  useEffect(()=>{    
      if(userA?._id){
      listsaludoSockect() 
      console.log(userA?._id)    
    }    
    
  },[userA?._id])      

      
  return (
    <>
    <div className="">
         <img src={telegramfondo} className="h-200 w-full object-cover" alt="" />
         
    </div>
   
    </>
  )
}
