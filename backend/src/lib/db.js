import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()
export const CreateConexion=async()=>{
    const connect=await mongoose.connect(process.env.MONGOURL)
    if(connect){
        console.log("Conexion con mongo realizada",connect.connection.host)
    }else{
        console.log("Hubo un error")
    }
}