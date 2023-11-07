import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <div>

    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
