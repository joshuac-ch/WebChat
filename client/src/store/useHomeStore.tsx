import { axiosIntance } from "@/lib/axios"
import {create} from "zustand"
interface Homestore{
    error:any|null,
    isloading:boolean,
    channels:[],
    FecthChannelAll:()=>Promise<void>
    ChannelSpecific:(id)=>Promise<void>
    channelSpecific:[]
    AllchannelUser:(id)=>Promise<void>
    channelUser:[]
}
export const useHomeStore=create<Homestore>((set)=>({
    error:null,
    isloading:false,
    channelUser:[],
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
    },   
    AllchannelUser:async(id)=>{
       set({error:null,isloading:true})
       try{
        const {data}=await axiosIntance.get(`/channel/u/a/${id}`)
        set({channelUser:data})
       }catch(err){
        set({error:err})
       }
    } 
}))   