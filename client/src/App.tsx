import './App.css'
import { Route,  Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './Home/HomePage'
import LonginPage from './Login/LonginPage'
import SignIn from './Login/SignIn'
import ChannelSpecific from './Channel/Components/ChannelSpecific'
import Buscardor from './Buscador/Buscardor'
import ChatSpecific from './Buscador/Components/chats/ChatSpecific'
import ChatUser from './Buscador/Components/chats/ChatUser'
import SearchUsers from './Buscador/Components/SearchUsers'

function App() {

  return (
    <>     
    {/*Se implemnata una ruta especial para el usuario save mesasges */}
        <Routes>
          <Route path='/login' element={<LonginPage></LonginPage>}></Route>
          <Route path='/sing' element={<SignIn></SignIn>}></Route>
          <Route element={<MainLayout></MainLayout>}>
             <Route path='/' element={<HomePage></HomePage>}></Route> 
             <Route path='/channel/:id/:canalid' element={<ChannelSpecific></ChannelSpecific>}></Route>   
             <Route path='/buscar' element={<Buscardor></Buscardor>}></Route>   
             <Route path='/chatuser/:id/:userid' element={<ChatSpecific></ChatSpecific>}></Route>   
             <Route path='/michat/:id' element={<ChatUser></ChatUser>}></Route>
             <Route path='/search/:id' element={<SearchUsers></SearchUsers>}></Route>
          </Route>         
        </Routes>      
    </>
  )
}

export default App
