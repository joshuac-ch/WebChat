
import './App.css'

import { Route,  Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './Home/HomePage'
import LonginPage from './Login/LonginPage'
import SignIn from './Login/SignIn'
import ChannelSpecific from './Channel/Components/ChannelSpecific'

function App() {

  return (
    <>     
        <Routes>
          <Route path='/login' element={<LonginPage></LonginPage>}></Route>
          <Route path='/sing' element={<SignIn></SignIn>}></Route>
          <Route element={<MainLayout></MainLayout>}>
             <Route path='/' element={<HomePage></HomePage>}></Route> 
             <Route path='/channel/:id' element={<ChannelSpecific></ChannelSpecific>}></Route>
          </Route>
         
        </Routes>
      
    </>
  )
}

export default App
