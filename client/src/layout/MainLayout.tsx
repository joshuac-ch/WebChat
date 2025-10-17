import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

import LeftLayout from './components/LeftLayout'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <div className="h-200 bg-zinc-800 w-400 rounded-2xl ">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                <LeftLayout></LeftLayout>
            </ResizablePanel>
        <ResizableHandle />
            <ResizablePanel>
                <Outlet/>
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
    </>
  )
}
