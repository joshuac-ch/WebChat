import { axiosIntance } from "@/lib/axios"
import {create} from "zustand"
interface UserStore{
    userA:any[]
    setUserA:(user:string[])=>Promise<void>
    FectUserSpecific:(id)=>Promise<void>
    error:null
    isloading:boolean
    FectUserAll:()=>Promise<void>
    alluser:[]
    miembros:[]
    setmiembros:(miembros:string[])=>Promise<void>
    miembrosID:[]
    setmiembrosID:(miembrosID:string[])=>Promise<void>
    
}
export const useUserStore=create<UserStore>((set)=>({
    userA:[],
    setUserA:(userA)=>set({userA}),
    miembrosID:[],
    setmiembrosID:(miembrosID)=>set({miembrosID}),
    miembros:[],
    setmiembros:(miembros)=>set({miembros}),
    error:null,
    isloading:false,
    FectUserSpecific:async(id)=>{
        set({isloading:true})
        try{
            const {data}=await axiosIntance.get(`/users/${id}`)
            set({userA:data})
        }catch(err:Any){
            set({error:err})
        }  
    },
    alluser:[],
    FectUserAll:async()=>{
        set({isloading:true,error:null})
        try{
            const {data}=await axiosIntance.get(`/users/g/a`)
            set({alluser:data})
        }catch(err:Any){
            set({error:err})
        }
    },
}))
