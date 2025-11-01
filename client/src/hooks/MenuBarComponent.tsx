
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import { useUserStore } from '@/store/useUserStore'

import { Menu } from 'lucide-react'

export default function MenuBarComponent({estadoactual}) {    
    const {userA}=useUserStore()
  return (
    <Menubar className='bg-zinc-800 border-0'>
  <MenubarMenu >
    <MenubarTrigger className='bg-zinc-800 hover:rounded-full hover:bg-zinc-900 p-2 transition-all duration-300'>        
            <Menu className='text-white'></Menu>        
    </MenubarTrigger>
    <MenubarContent  className='bg-zinc-800 text-white border-0'>
      <MenubarItem>
        {userA?userA.fullname:"no hay fullname"}<MenubarShortcut>{userA?userA.profile:"..."}</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>My profile</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
  )
}
