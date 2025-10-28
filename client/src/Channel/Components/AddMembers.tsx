import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import LeftButtonComponent from '@/hooks/LeftButtonComponent'
import NextButtonComponent from '@/hooks/NextButtonComponent'
import { useUserStore } from '@/store/useUserStore'
import { AuthUserContext } from '@/UserProvider/UserProvide'
import { useContext, useEffect, useState } from 'react'


export default function AddMembers() {
    const {FectUserAll,alluser,setmiembros,setmiembrosID}=useUserStore()
    const [seleccionarMiembros, setseleccionarMiembros] = useState([])
    const [seleccionarMiembrosID, setseleccionarMiembrosID] = useState([])
    const {setestadoactual}=useContext(AuthUserContext)
    useEffect(()=>{
        FectUserAll()
    },[FectUserAll])
    const handleNext=()=>{
        setmiembros(seleccionarMiembros)
        setmiembrosID(seleccionarMiembrosID)
        setestadoactual("/channel/create")
    }
  return (
    <>
    <div className="p-6 text-white">
        <div className="flex flex-row gap-2 items-center">
            <LeftButtonComponent></LeftButtonComponent>
            <p className='font-semibold'>Agregar Miembros</p>
        </div>
        <div className="mt-4 border-b-2">
            <div className="flex flex-row flex-wrap w-full rounded-md">
               {seleccionarMiembros.map((s,i)=>{
                return(
                    <div className="bg-cyan-700 rounded-full m-2 pr-4 flex flex-row items-center gap-2" key={i}>
                        {
                            s?.profile?
                            <img src={s?.profile} className='w-8 h-8 rounded-full' alt="" />
                            :
                            <p className='w-8 h-8 rounded-full border-2'>{s.name.slice(0,1)}</p>
                        }
                        <p>{s.name}</p>
                    </div>
                )
               })}
            </div>
        </div>
        <div className="mt-8">
            {alluser?.map((a,i)=>{
                return(
                    <div key={i} 
                    className="flex flex-row justify-between items-center p-2 hover:bg-zinc-700 rounded-md ">
                        <div className="flex flex-row items-center gap-4">
                            {a?.profile?
                        <img src={a?.profile} className='w-10 h-10 rounded-full' alt="" />   
                        :
                        <p className='w-10 h-10 font-bold rounded-full border-2 p-1'>{a?.name?.slice(0,1)}</p>
                       
                        } 
                        <div className="">
                            <p>{a?.name}</p>
                            
                        </div>
                        </div>
                        <div className="">
                            <Checkbox
                            checked={seleccionarMiembros.some((m) => m.id === a._id)}
                            onCheckedChange={(e) => {                              
                                if (e) {
                                setseleccionarMiembros((prev) => {
                                    if(prev.some((m)=>m.id===a._id))return prev
                                    return [...prev,{id:a._id,name:a.name,profile:a?.profile}]
                                })
                                setseleccionarMiembrosID((prev)=>{
                                     if (prev.includes(a._id)) return prev;
                                    return[...prev,a._id]
                                })
                                } else {
                                setseleccionarMiembros((prev) => prev.filter((m) => m.id !== a._id))
                                setseleccionarMiembrosID((prev)=> prev.filter((id) => id !== a._id))
                                }
                            }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="" onClick={handleNext}>
            <NextButtonComponent ></NextButtonComponent>
        </div>
    </div>
    </>
  )
}
