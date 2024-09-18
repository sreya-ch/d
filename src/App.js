import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPager from './Pages/LoginPager'



const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='login' element = {<LoginPager/>} />
      <Route path='signup' element = {<RegisterPage/>}/>

      </Routes>


    </div>
  )
}

export default App
