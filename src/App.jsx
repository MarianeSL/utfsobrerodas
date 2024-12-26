import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Esquecisenha from './pages/Esquecisenha/Esquecisenha'
import './index.css'
import Cadastro from './pages/Cadastro/Cadastro'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esquecisenha" element={<Esquecisenha />} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </Router>
  )
}
export default App
