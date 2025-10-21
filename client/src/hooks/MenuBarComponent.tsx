
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import { AuthUserContext } from '@/UserProvider/UserProvide'
import { Menu } from 'lucide-react'
import { useContext } from 'react'
export default function MenuBarComponent({estadoactual}) {
    const {user}=useContext(AuthUserContext)
  return (
    <Menubar className='bg-zinc-800 border-0'>
  <MenubarMenu >
    <MenubarTrigger className='bg-zinc-800 hover:rounded-full hover:bg-zinc-900 p-2 transition-all duration-300'>        
            <Menu className='text-white'></Menu>        
    </MenubarTrigger>
    <MenubarContent  className='bg-zinc-800 text-white border-0'>
      <MenubarItem>
        {user?user.fullname:"no hay fullname"}<MenubarShortcut>{user?user.profile:"..."}</MenubarShortcut>
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
