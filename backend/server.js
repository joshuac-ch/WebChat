import express from "express"
import logger from "morgan"
const app=express()
app.use(logger('dev'))
const port=process.env.PORT||3500
app.get("/",(req,res)=>{
    res.send("<h1>Helo word</h1>")
})
app.listen(port,()=>{
    console.log(`Servidor levantado en http://localhost:${port}/`)
})