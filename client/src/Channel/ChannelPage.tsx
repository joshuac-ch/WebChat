import { useHomeStore } from '@/store/useHomeStore'
import { useMessageStore } from '@/store/useMessageStore'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ChannelPage() {
  const {channels,FecthChannelAll}=useHomeStore()
  useEffect(()=>{
    FecthChannelAll()
  },[FecthChannelAll])
  const {JoinChannel}=useMessageStore()
  return (
    <>
      <div className="m-4 text-white">
        {channels.map((c,i)=>{
          return(
            <Link onClick={()=>JoinChannel({canalID:c._id})} to={`/channel/${c._id}`} className="mt-2 flex hover:bg-white/20 flex-row justify-between items-center rounded-2xl p-2" key={i}>
              <div className="flex flex-row gap-4">
                <div className="">
                  <img src={c.image} className='w-15 h-15 rounded-full' alt="" />
                </div>
                <div className="text-start">
                  <p>{c.title}</p>
                  <p>{c.description}</p>
                </div>
              </div>
              <div className="">
                <p>{c.updatedAt?c.updatedAt.split("T")[0]:""}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
