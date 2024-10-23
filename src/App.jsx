import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Esquecisenha from './pages/Esquecisenha'
import './index.css'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esquecisenha" element={<Esquecisenha />} />
      </Routes>
    </Router>
  )
}
export default App
