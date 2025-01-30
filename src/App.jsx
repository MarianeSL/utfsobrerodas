import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Esquecisenha from './pages/Esquecisenha/Esquecisenha'
import './index.css'
import Cadastro from './pages/Cadastro/Cadastro'
import Origem from './pages/Origem/Origem'
import Destino from './pages/Destino/Destino'
import Menu from './pages/Menu/Menu'
import 'leaflet/dist/leaflet.css'
import Rota from './pages/Rota/Rota'
import Favoritos from './pages/Favoritos/Favoritos'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esquecisenha" element={<Esquecisenha />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/origem" element={<Origem/>}/>
        <Route path="/destino" element={<Destino/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/rota" element={<Rota/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </Router>
  )
}
export default App
