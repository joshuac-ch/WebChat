import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Edit2, Ellipsis, VolumeOff } from "lucide-react";


export default function Elipsis({setrigthstate}) {
  return (
    <>
        <Menubar className="bg-zinc-800 border-0">
            <MenubarMenu>
                <MenubarTrigger className="">
                    <Ellipsis></Ellipsis>
                </MenubarTrigger>
                <MenubarContent>                                          
                    <MenubarItem className="cursor-pointer" onClick={()=>setrigthstate(true)}>
                        <Button className="">
                            <Edit2></Edit2>
                        </Button>
                        <p>Editar</p>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className="cursor-pointer">
                        <Button>
                            <VolumeOff></VolumeOff>
                        </Button>
                        <p>Notificaciones</p>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </>
  )
}
