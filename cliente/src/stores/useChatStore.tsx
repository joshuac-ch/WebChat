
import { io } from "socket.io-client" 
export default function useChatStore() {
  const socket=io("http://localhost:3500")
  socket.on("connect",()=>{
    console.log("usuario conectado")
  })
  return (
    <div>useChatStore</div>
  )
}
