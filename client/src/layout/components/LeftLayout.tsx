import ChannelPage from '@/Channel/ChannelPage'
import AddMembers from '@/Channel/Components/AddMembers'
import CreateChannel from '@/Channel/Components/CreateChannel'
import { Input } from '@/components/ui/input'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import EditPerfil from '@/Home/Profile/components/EditPerfil'
import PerfilPage from '@/Home/Profile/PerfilPage'

import { useUserStore } from '@/store/useUserStore'

import { AuthUserContext } from '@/UserProvider/UserProvide'
import {  AudioLines, LogOut, Menu, MessageCircleMore, Search, Users } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buscardor from '../../Buscador/Buscardor'

export default function LeftLayout() {
  const [estado, setestado] = useState("principal")
  const {user,setestadoactual,estadoactual}=useContext(AuthUserContext)
  const {userA}=useUserStore()
  
  return (
    <>
    <div className="max-w-120 h-full bg-zinc-800 rounded-l-2xl">
        {estadoactual=="principal"?
        <>   
          <div className="flex p-4 items-center flex-row justify-between">
          <div className="">
             <Menubar className='bg-zinc-800 border-0'>
              <MenubarMenu >
                <MenubarTrigger className='bg-zinc-800 hover:rounded-full hover:bg-zinc-900 p-2 transition-all duration-300'>        
                        <Menu className='text-white'></Menu>        
                </MenubarTrigger>
                <MenubarContent  className='bg-zinc-800 text-white border-0'>
                  <MenubarItem onClick={()=>setestadoactual("user")}>
                    <div className="flex flex-row items-center w-full gap-5">                      
                         <img src={userA?.profile} className='w-8 rounded-full h-8' alt="" />
                        <p>{userA?userA?.name:"no hay fullname"}</p>                       
                    </div>
                  </MenubarItem>
                  <MenubarItem onClick={()=>setestadoactual("channel")}><AudioLines />Channel</MenubarItem>
                 
                  <MenubarItem><Users />Group</MenubarItem>
                  
                  <MenubarItem><MessageCircleMore />Message</MenubarItem>
                  
                  <MenubarItem >
                    <LogOut />
                    <Link to={"/sing"}>Cerrar Session</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="relative flex flex-row items-center  rounded-full" onClick={()=>setestadoactual("buscador")}>
            <Input className='w-90 bg-zinc-900 border-0 rounded-full'placeholder='Buscar...'></Input>
            <Search className='absolute right-5'></Search>
          </div>
          
        </div>
        <div className="">
            <ChannelPage></ChannelPage>
          </div>
        </>
        :
        <>
        {estadoactual=="user"?
        <>
        <PerfilPage></PerfilPage>
        </>
        :estadoactual=="edit/user"?
          <EditPerfil></EditPerfil>
        :estadoactual=="channel"?
          <AddMembers></AddMembers>
        :estadoactual=="/channel/create"?
          <CreateChannel></CreateChannel>
        :estadoactual=="buscador"?
          <Buscardor></Buscardor>
        :""}
        </>  
       }
        
    </div>
    </>
  )
}
