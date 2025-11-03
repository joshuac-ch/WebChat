
import { useHomeStore } from '@/store/useHomeStore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderChannel from './HeaderChannel'
import SearchComponent from '@/components/SearchComponent'
import { useUserStore } from '@/store/useUserStore'
import { useMessageStore } from '@/store/useMessageStore'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function ChannelSpecific() {
    const {id}=useParams()
    const {channelSpecific,ChannelSpecific}=useHomeStore()
    const {userA}=useUserStore()
    const [DataChannel,setDataChannel]=useState({
      create:channelSpecific.createdAt,
      foto:channelSpecific.image            
    })
    useEffect(()=>{
        if(id){
          ChannelSpecific(id)          
        }
    },[ChannelSpecific,id])
    useEffect(()=>{
      if(channelSpecific){
        setDataChannel({create:channelSpecific.createdAt,foto:channelSpecific.image})
      }
    },[channelSpecific])
    const {messagesChannel}=useMessageStore()
  return (
    <>
    <div className="text-white flex flex-col h-200 justify-start w-full">
       <div className="">
            <HeaderChannel data={channelSpecific}></HeaderChannel>
       </div>
       <div className="h-165">
       <ScrollArea className='h-full'>
        <div className="h-full flex flex-col justify-start">
          <div className="mt-4">
              <p>{new Date(DataChannel.create).toLocaleDateString()??""}</p>
              <p className='mt-4'>Channel Created</p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p>Channel Photon Updated</p>
            <img src={DataChannel.foto} className='mt-2 w-40 h-40 rounded-full' alt="" />
          </div>
          <div className="flex flex-col gap-3 px-12 p-4 items-start">
              {messagesChannel.length>0?
              messagesChannel.map((m,i)=>{
                return(
                  <div key={i} className='p-2 rounded-md w-40 bg-white/20'>
                    <p className='text-start'>{m.content}</p>
                    <div className="">
                      <p className='text-end text-[13px]'>{new Date(m.createdAt).getFullYear()}</p>
                    </div>
                  </div>
                )
              })
              :
              "no hay data"}
          </div>
        </div>
       </ScrollArea>
       </div>
       <div className="flex flex-row justify-center">
          <SearchComponent userID={userA?._id} channelID={id}></SearchComponent>
       </div>
    </div>
    </>
  )
}
