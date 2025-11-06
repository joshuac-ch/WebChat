import express from "express"
import logger from "morgan"
import { Server } from "socket.io"
import {createServer} from "node:http"
import { CreateConexion } from "./src/lib/db.js"
import { configDotenv } from "dotenv";
import cors from "cors"

import userRoutes from "./src/router/userRoutes.js"
import channelRoutes from "./src/router/channelRoutes.js"
import MessageRoutes from "./src/router/MessageRoutes.js"
import { InitialSoeckt } from "./src/lib/socket.js"
configDotenv()
const app=express()
//Habilitar CORS para API REST
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.urlencoded({ extended: true })); // para recibir forms
const server=createServer(app)
InitialSoeckt(server)

//io.on("connection",(socket)=>{
//    console.log("usuaruio conectado")
//    socket.on("chat message",(socket)=>{
//    console.log("mensjae recibido",socket)
//    io.emit("chat message",socket)
//})
//})
app.use("/api/channel/",channelRoutes)
app.use("/api/users/",userRoutes)
app.use("/api/message/",MessageRoutes)
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