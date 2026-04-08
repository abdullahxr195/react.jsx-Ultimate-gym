import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import LandingPage from './component/Landing page/LandingPage'
import { Toaster } from 'react-hot-toast'
import Register from './component/Auth/Register'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Toaster/>
      
      <Routes>
      <Route path='/register' element={<Register/>}/>
       <Route path='/' element={<LandingPage/>}/>

      </Routes>
        
    



    </>
  )
}

export default App
