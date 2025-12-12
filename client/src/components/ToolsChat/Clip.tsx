import { File, Image, NotebookText, Paperclip } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar";
import { useRef} from "react";
import { Button } from "../ui/button";

interface ClipProps{
  onPreview:(url:string|null)=>void;
  OnState:(estado:boolean|null)=>void
  OnFile:(file:File|null)=>void

}
export default function Clip({onPreview,OnState,OnFile}:ClipProps) {
  
  const fileref= useRef<HTMLInputElement>(null)  
  const OpenFile=(file:File)=>{       
       if (!file) return;
          const url = URL.createObjectURL(file)
          onPreview(url)
          OnFile(file)
          OnState(true)
          // Muy importante:
          // Resetea el input para poder seleccionar la MISMA imagen otra vez.
          if (fileref.current) fileref.current.value = ""
  }  
  return (
    <>
    <input type="file" accept="image/*" name="" className="hidden" onChange={(e)=>OpenFile(e.target.files?.[0])} ref={fileref}  id="" />
    <Menubar>
        <MenubarMenu>
            <MenubarTrigger><Paperclip className="w-6 h-6"></Paperclip></MenubarTrigger>
            <MenubarContent>
                <MenubarItem >
                    <Button onClick={()=>fileref.current?.click()}><Image></Image></Button>                    
                    Photo
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem><File></File> File
               
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem><NotebookText></NotebookText> Encuesta
                
                </MenubarItem>            
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
    
    </>
  )
}
