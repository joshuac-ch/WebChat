
import { useHomeStore } from '@/store/useHomeStore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderChannel from './HeaderChannel'
import SearchComponent from '@/components/SearchComponent'
import { useUserStore } from '@/store/useUserStore'

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
  return (
    <>
    <div className="text-white flex flex-col h-200 justify-start w-full">
       <div className="">
            <HeaderChannel data={channelSpecific}></HeaderChannel>
       </div>
       <div className="h-full flex flex-col justify-start">
          <div className="mt-4">
              <p>{new Date(DataChannel.create).toLocaleDateString()??""}</p>
              <p className='mt-4'>Channel Created</p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p>Channel Photon Updated</p>
            <img src={DataChannel.foto} className='mt-2 w-40 h-40 rounded-full' alt="" />
          </div>
       </div>
       <div className="flex flex-row justify-center">
          <SearchComponent userID={userA?._id} channelID={id}></SearchComponent>
       </div>
    </div>
    </>
  )
}
