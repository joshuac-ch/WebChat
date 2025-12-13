import { Button } from '@/components/ui/button'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar'
import { Edit2, Ellipsis, Search, VolumeOff } from 'lucide-react'


export default function HeaderChannel({data,setrigthstate}) {
    
    
  return (
    <div className="pt-2 pb-2 pl-6 pr-6 bg-zinc-800 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
            <div className="">
                <img src={data.image} className='rounded-full h-13 w-13 object-cover' alt="" />
            </div>
            <div className="">
                <p className='text-start text-xl' >{data.title}</p>
                <p className='text-start'>{data.miembros?.length} miembros,</p>
            </div>
        </div>
        <div className="flex flex-row items-center gap-6">
            <div className="">
                <Search></Search>
            </div>
            <div className='text-black'>
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Ellipsis></Ellipsis>
                    </MenubarTrigger>
                    <MenubarContent>                                          
                        <MenubarItem><Button onClick={()=>setrigthstate(true)}>
                                <Edit2></Edit2>Editar</Button></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem><VolumeOff></VolumeOff>Notificaciones</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                </Menubar>
               
            </div>
        </div>
    </div>
  )
}
