import { Input } from "@/components/ui/input";
import LeftButtonComponent from "@/hooks/LeftButtonComponent";
import { Search } from "lucide-react";
import { useState } from "react";
import Chats from "./Components/chats/Chats";
import Channels from "./Components/Channels";
import Post from "./Components/Post";


export default function Buscardor() {
    const [busqueda, setbusqueda] = useState("chats")
    const [InputBusqueda, setInputBusqueda] = useState("")
    const Searchbtn=()=>{
      if(!InputBusqueda.trim())return
      else{
        setInputBusqueda(InputBusqueda)
        console.log(InputBusqueda)
      }
    }
  return (
   <>
   <div className="">
        <div className="flex flex-row ">
            <div className="p-4">
                <LeftButtonComponent ></LeftButtonComponent>
            </div>
            <div className="relative text-white flex flex-row items-center  rounded-full">
                <Input value={InputBusqueda} onChange={(e)=>setInputBusqueda(e.target.value)} className='w-90 bg-zinc-900 border-0 rounded-full'placeholder='Buscar...'></Input>
                <Search onClick={Searchbtn} className='absolute right-5'></Search>
              </div>
        </div>
        <div className="flex flex-row gap-8 p-4 font-semibold text-zinc-400">
            <div onClick={()=>setbusqueda("chats")} className={`cursor-pointer transition ${busqueda=="chats"?"text-indigo-400":""}`}><p>Chats</p></div>    
            <div onClick={()=>setbusqueda("channels")} className={`cursor-pointer transition ${busqueda=="channels"?"text-indigo-400":""}`}><p>Canales</p></div>    
            <div onClick={()=>setbusqueda("apps")} className={`cursor-pointer transition ${busqueda=="apps"?"text-indigo-400":""}`}><p>Apps</p></div>    
            <div onClick={()=>setbusqueda("post")} className={`cursor-pointer transition ${busqueda=="post"?"text-indigo-400":""}`}><p>Posts</p></div>    
            <div onClick={()=>setbusqueda("media")} className={`cursor-pointer transition ${busqueda=="media"?"text-indigo-400":""}`}><p>Media</p></div>    
            <div onClick={()=>setbusqueda("links")} className={`cursor-pointer transition ${busqueda=="links"?"text-indigo-400":""}`}><p>Links</p></div>    
            <div onClick={()=>setbusqueda("files")} className={`cursor-pointer transition ${busqueda=="files"?"text-indigo-400":""}`}><p>Files</p></div>    
            <div onClick={()=>setbusqueda("music")} className={`cursor-pointer transition ${busqueda=="music"?"text-indigo-400":""}`}><p>Musics</p></div>           
        </div> 
        <div className="text-white">
          {busqueda==="chats"?
          <Chats search={InputBusqueda}></Chats>
          :busqueda==="channels"?
          <Channels search={InputBusqueda}></Channels>
          :busqueda==="post"?
          <Post></Post>
          :""}
        </div>   
   </div>
   </>
  )
}
