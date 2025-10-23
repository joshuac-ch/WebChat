import { axiosIntance } from "@/lib/axios"
import {create} from "zustand"
interface UserStore{
    userA:any[]
    FectUserSpecific:(id)=>Promise<void>
    error:null
    isloading:boolean
}
export const useUserStore=create<UserStore>((set)=>({
    userA:[],
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
    }
}))
