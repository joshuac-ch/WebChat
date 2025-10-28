import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

import LeftLayout from './components/LeftLayout'
import { Outlet } from 'react-router-dom'
import FondoTelegram from "../assets/telegram.png"

export default function MainLayout() {
  return (
    <>
    <div className="h-200 overflow-hidden bg-zinc-900 w-400 rounded-2xl ">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={5} maxSize={35}>
                <LeftLayout></LeftLayout>
            </ResizablePanel>
        <ResizableHandle className='bg-zinc-700' />
            <ResizablePanel maxSize={67} defaultSize={60}>               
                    <div style={{backgroundImage:`url(${FondoTelegram})`}} className="relative bg-cover bg-center">
                     
                       <Outlet/>
                     
                    </div>                
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
    </>
  )
}
