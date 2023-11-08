import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import UserRegistration from './pages/User/UserRegistration'

function App() {

  return (
    <div>

    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<UserRegistration />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
