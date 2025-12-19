
import { useHomeStore } from '@/store/useHomeStore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderChannel from './HeaderChannel'
import SearchComponent from '@/components/SearchComponent'
import { useUserStore } from '@/store/useUserStore'
import { useMessageStore } from '@/store/useMessageStore'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowUpRight } from 'lucide-react'
import RightLayout from '@/layout/components/RightLayout'

export default function ChannelSpecific() {
    const {id}=useParams()
    const {channelSpecific,ChannelSpecific}=useHomeStore()
    const {userA}=useUserStore()
    const [DataChannel,setDataChannel]=useState({
      create:channelSpecific?.createdAt,
      foto:channelSpecific?.image            
    })
    useEffect(()=>{
        if(id){
          ChannelSpecific(id)          
        }
    },[ChannelSpecific,id])
    useEffect(()=>{
      if(channelSpecific){
        setDataChannel({create:channelSpecific?.createdAt,foto:channelSpecific.image})
      }
    },[channelSpecific])
    const {messagesChannel}=useMessageStore()
    const [showstate, setshowstate] = useState(false)
    
  return (
    <>
    <div className="text-white flex flex-col h-200 justify-start w-full">
       <div className="">
            <HeaderChannel data={channelSpecific} setrigthstate={setshowstate}></HeaderChannel>
       </div>
      <div className={`${showstate?"grid grid-cols-2":""}`}>
        <div className="">
          <div className="h-165">
       <ScrollArea className='h-full'>
        <div className="h-full flex flex-col justify-start">
          <div className="mt-4">
              <p>{new Date(DataChannel.create).toLocaleDateString()??""}</p>
              <p className='mt-4'>Channel Created</p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <p>Channel Photon Updated</p>
            <img src={DataChannel.foto} className='mt-2 w-50 h-50 object-cover rounded-full' alt="" />
          </div>
          <div className="flex flex-col gap-3 px-12 p-4 items-start">
            {messagesChannel.length>0?
               messagesChannel.map((m,i)=>{
                const texto=m.type=="text"
                const mix=m.type=="mix"
                return(
                  <div className="" key={i}>
             
                  {texto&&(
                    <div key={i} className="relative flex flex-row items-end group">
                    <div  className='relative p-2 rounded-md max-w-100 min-w-25 min-h-15  bg-zinc-800'>
                    <p className='text-start'>{m.content}</p>
                    <div className="">
                      <p className='text-end text-[13px] text-gray-500'>{new Date(m.createdAt).getFullYear()}</p>
                    </div>
                    
                  </div>
                  <div className="cursor-pointer ml-2 border-2  border-white/20 bg-zinc-800 rounded-md hidden group-hover:block transition-all duration-300 ">
                      <ArrowUpRight />
                    </div>
                  </div>
                  )}
                 
               
                {mix&&(
                  <div key={i} className="relative flex flex-row items-end group">
                    <div  className='relative p-2 rounded-md max-w-100 min-w-25 min-h-15  bg-zinc-800'>
                    <img src={m.imageURL} className='w-full h-full object-cover rounded-md' alt="" />
                    <p className='text-start'>{m.content}</p>
                    <div className="">
                      <p className='text-end text-[13px] text-gray-500'>{new Date(m.createdAt).getFullYear()}</p>
                    </div>
                    
                  </div>
                  <div className="cursor-pointer ml-2 border-2  border-white/20 bg-zinc-800 rounded-md hidden group-hover:block transition-all duration-300 ">
                      <ArrowUpRight />
                    </div>
                  </div>
                )}
                   
                  </div>
                )   
              
            })      
             
            :
            "cargando..."}
          </div>
        </div>
       </ScrollArea>
          </div>
          <div className="flex flex-row justify-center">
            <SearchComponent userID={userA?._id} channelID={id}></SearchComponent>
          </div>
        </div>
        <div className="">
          {showstate&&(
            <RightLayout data={channelSpecific} Onclose={setshowstate}></RightLayout>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
