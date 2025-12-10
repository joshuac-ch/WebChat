import { axiosIntance } from "@/lib/axios"
import {create} from "zustand"
interface UseSearch{
    FechAllChannel:({search:string})=>Promise<void>;
    showChannels:any[];
    isloading:boolean;
    error:null;
    ShowUserchat:({user:string})=>Promise<void>;
    alluserchat:any[];
    ShowSpecificUser:({user:string})=>Promise<void>
    datauser:any[]
}

export const useSearchStore=create<UseSearch>((set)=>({
    isloading:false,
    error:null,
    showChannels:[],
    alluserchat:[],
    FechAllChannel:async(search)=>{
       set({isloading:true,error:null})
       try{
        const {data}=await axiosIntance.get(`/channel/g/search/${search}`)
        set({showChannels:data})
       }catch(err:any){
        set({error:err})
       }finally{
            set({isloading:false})
        }     
    },
    ShowUserchat:async(user)=>{
        set({isloading:true,error:null})
        try{
            const {data}=await axiosIntance.get(`/users/g/search/${user}`)
            set({alluserchat:data})
        }catch(err:any){
            set({error:err})
        }finally{
            set({isloading:false})
        }
    },
    datauser:[],
    ShowSpecificUser:async(user)=>{
        set({isloading:true,error:null})
        try{
            const {data}=await axiosIntance.get(`/users/search/${user}`)
            
            set({datauser:data.user})
        }catch(err:any){
            set({error:err})
        }finally{
            set({isloading:false})
        }
    }  
      
})) 
