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
                    <MenubarItem>
                        <Button onClick={()=>setrigthstate(true)}>
                            <Edit2></Edit2>Editar
                        </Button>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem><VolumeOff></VolumeOff>Notificaciones</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </>
  )
}
