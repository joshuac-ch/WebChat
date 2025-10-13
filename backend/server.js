import express from "express"
import logger from "morgan"
import { Server } from "socket.io"
import {createServer} from "node:http"
const app=express()
const server=createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*"
    }
})
io.on("connect",(sokcet)=>{
    console.log("se conecto el usuario",sokcet.id)
})
app.use(logger('dev'))
const port=process.env.PORT||3500
app.get("/",(req,res)=>{
    res.send("<h1>Helo word</h1>")
})
server.listen(port,()=>{
    console.log(`Servidor levantado en http://localhost:${port}/`)
})