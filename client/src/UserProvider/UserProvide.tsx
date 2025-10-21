import { createContext, useEffect, useState } from 'react'
export const AuthUserContext=createContext(null)
export default function UserProvide({children}) {
 const [user, setUser] = useState(null)
 const [estadoactual, setestadoactual] = useState("principal")
 //Cargar usuario desde localStorage cuando inicia la app
  useEffect(()=>{
    const savedUser=localStorage.getItem("user")
    if(savedUser){
        setUser(JSON.parse(savedUser))
    }
  },[])
  useEffect(()=>{
    if(user){
        localStorage.setItem("user",JSON.stringify(user))
    }else{
        localStorage.removeItem("user")//en caso cierre sesion
    }
  },[user])
  return (
    <>
    <AuthUserContext.Provider value={{user,setUser,estadoactual,setestadoactual}}>
        {children}
    </AuthUserContext.Provider>
    </>
  )
}
