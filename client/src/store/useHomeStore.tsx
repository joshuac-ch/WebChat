import { axiosIntance } from "@/lib/axios"
import {create} from "zustand"
interface Homestore{
    error:any|null,
    isloading:boolean,
    channels:[],
    FecthChannelAll:()=>Promise<void>
    ChannelSpecific:(id)=>Promise<void>
    channelSpecific:[]
}
export const useHomeStore=create<Homestore>((set)=>({
    error:null,
    isloading:false,
    channelSpecific:[],
    ChannelSpecific:async(id)=>{
        set({isloading:true,error:null})
        try{
            const {data}=await axiosIntance.get(`/channel/g/${id}`)
            set({channelSpecific:data})
        }catch(err){
            set({error:err})
        }
    },
    channels:[],
    FecthChannelAll:async()=>{
        set({isloading:true,error:null})
        try{
            const {data}=await axiosIntance.get("/channel/g/a")
            set({channels:data})
        }catch(err){
            set({error:err})
        }
    }    
}))   