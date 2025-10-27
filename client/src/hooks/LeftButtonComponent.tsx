
import { AuthUserContext } from "@/UserProvider/UserProvide";
import { ChevronLeft } from "lucide-react";
import { useContext } from "react";

export default function LeftButtonComponent({ruta="principal"}) {
    const {setestadoactual}=useContext(AuthUserContext)
  return (
    <>
        <div onClick={()=>setestadoactual(ruta)} 
        className="hover:bg-zinc-700 duration-300 transition-all p-2 rounded-full ">          
             <ChevronLeft className="h-5 w-5 text-white"></ChevronLeft>           
        </div>
    </>
  )
}
