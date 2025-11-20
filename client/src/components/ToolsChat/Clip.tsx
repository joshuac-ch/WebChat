import { File, Image, NotebookText, Paperclip } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar";
import { useRef, useState } from "react";
import { Button } from "../ui/button";


export default function Clip() {
  const [searchFile, setsearchFile] = useState<File|null>()
  const fileref= useRef<HTMLInputElement>(null)
  const [previwe, setpreviwe] = useState<string|null>(null)
  const OpenFile=(e:File)=>{    
    if(e){
       setpreviwe(URL.createObjectURL(e))
       setsearchFile(e)
       console.log(searchFile)
    }
  }  
  return (
    <>
    <Menubar>
        <MenubarMenu>
            <MenubarTrigger><Paperclip className="w-6 h-6"></Paperclip></MenubarTrigger>
            <MenubarContent>
                <MenubarItem >
                    <Button onClick={()=>fileref.current?.click()}></Button>
                   
                   <Image></Image> Photo
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem><File></File> File
                 <input type="file" accept="image/*" name="" className="hidden" onChange={(e)=>OpenFile(e.target.files?.[0])} ref={fileref}  id="" />
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem><NotebookText></NotebookText> Encuesta
                {previwe&&(
                    <img src={previwe} className="w-10 h-10" alt="" />
                )}
                </MenubarItem>            
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
    </>
  )
}
