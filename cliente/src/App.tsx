
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../src/components/HomePage'

function App() {

  return (
    <>
     <Routes>
      <Route element={<HomePage></HomePage>} path='/'></Route>
     </Routes>
    </>
  )
}

export default App
