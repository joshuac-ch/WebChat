import DeleteChat from '@/components/DeleteChat'
import { useHomeStore } from '@/store/useHomeStore'
import { useMessageStore } from '@/store/useMessageStore'
import { useUserStore } from '@/store/useUserStore'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ChannelPage() {
  const {channelUser,AllchannelUser}=useHomeStore()
  const {userA}=useUserStore()
  useEffect(()=>{
    AllchannelUser(userA._id)
  },[AllchannelUser,userA])
  const {JoinChannel,JoinChat}=useMessageStore()
  return (
    <>
      <div className="m-4 text-white">
        {channelUser.map((c,i)=>{
          const canales=c.categoria=="canal"
          const chatsusers=c.categoria=="chat"
          const personal=c.categoria=="personal"
          return(
           <div className="" key={i}>
             {canales&&(
              <Link onClick={()=>JoinChannel({canalID:c._id})} to={`/channel/${c._id}`} className="mt-2 flex hover:bg-white/20 flex-row justify-between items-center rounded-2xl p-2" key={i}>
              <div className="flex flex-row gap-4">
                <div className="">
                  <img src={c.image} className='w-15 h-15 rounded-full object-cover' alt="" />
                </div>
                <div className="text-start">
                  <p>{c.title}</p>
                  <p>{c.description}</p>
                </div>
              </div>
              <div className="">
                <DeleteChat id={c._id}></DeleteChat>
                <p>{c.updatedAt?c.updatedAt.split("T")[0]:""}</p>
              </div>
            </Link>
            )}
            {chatsusers&&(
              <Link onClick={()=>JoinChat({chatID:c.miembros[1]})} to={`/chatuser/${c.miembros[1]}`} className="mt-2 flex hover:bg-white/20 flex-row justify-between items-center rounded-2xl p-2" key={i}>
              <div className="flex flex-row gap-4">
                <div className="">
                  <img src={c.image}  className='w-15 h-15 rounded-full object-cover' alt="" />
                </div>
                <div className="text-start">
                  <p>{c.title}</p>
                  <p>{c.description}</p>
                </div>
              </div>
              <div className="">
                <DeleteChat id={c._id}></DeleteChat>
                <p>{c.updatedAt?c.updatedAt.split("T")[0]:""}</p>
              </div>
            </Link>)}
            {personal&&(
              <Link onClick={()=>JoinChat({chatID:c.miembros[0]})} to={`/chatuser/${c.miembros[0]}`} className="mt-2 flex hover:bg-white/20 flex-row justify-between items-center rounded-2xl p-2" key={i}>
              <div className="flex flex-row gap-4">
                <div className="">
                  <img src={c.image}  className='w-15 h-15 rounded-full object-cover' alt="" />
                </div>
                <div className="text-start">                 
                  <p>{c._id}</p>
                  <p>{c.description}</p>
                </div>
              </div>
              <div className="">
                <DeleteChat id={c._id}></DeleteChat>
                <p>{c.updatedAt?c.updatedAt.split("T")[0]:""}</p>
              </div>
            </Link>
            )}            
           </div>
          )
        })}
      </div>
    </>
  )
}
//ya funciona los chats normalmente ahora lo que falta es que el al hacer click que muestre los datos para ello usar la funcion ya creada  connectuser:[],      
// ShowConnectAnotherUser
