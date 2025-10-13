import express from "express"
import logger from "morgan"
import { Server } from "socket.io"
import {createServer} from "node:http"
import { CreateConexion } from "./src/lib/db.js"
import { configDotenv } from "dotenv";
import { InsertUsers } from "./src/seed/userInset.js"
import { InsertMessages } from "./src/seed/messageInsert.js"
configDotenv()
const app=express()
const server=createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*"
    }
})
io.on("connection",()=>{
    console.log("usuaruio ocnencatdo")
})
app.use(logger('dev'))
const port=process.env.PORT||3500
app.get("/",(req,res)=>{
    res.send("<h1>Helo word</h1>")
})
server.listen(port,()=>{
    console.log(`Servidor levantado en http://localhost:${port}/`)
    CreateConexion()
    //InsertUsers()
    //InsertMessages()
})