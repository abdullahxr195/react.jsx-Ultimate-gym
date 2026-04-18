import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Register from './component/Auth/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Auth/Login'
import UserDashboard from './component/user dashboard/UserDashboard'
import AdminDashboard from './component/Admin Dashboard/AdminDashboard'
import MenuListPage from './Page/Menu List Page/MenuListPage'
import ProfilePage from './Page/Profile Page/ProfilePage.jsx'
import UserDashboardPage from './Page/User/UserDashboardPage.jsx'
import ManageUsersPage from './Page/Manage Users Page/ManageUsersPage.jsx'
import LandingPage from './Page/Landing page copy/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Toaster/>
      
      <Routes>
      <Route path='/register' element={<Register/>}/>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/login' element={<Login/>} />
      <Route path='/user-dashboard' element={<UserDashboard/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
       <Route path='/view-menu' element={<MenuListPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/user-dashboard-page' element={<UserDashboardPage/>}/>
        <Route path='/Manage-Users-Page' element={<ManageUsersPage/>}/>
        
      </Routes>
        
    



    </>
  )
}

export default App
