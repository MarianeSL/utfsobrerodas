import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsChevronCompactLeft } from 'react-icons/bs'
import './Menu.css'

function Menu() {

  const navigate = useNavigate();

  return (
    <>
      <div className='menu'>
      <BsChevronCompactLeft 
      onClick={()=> window.history.back()}/>
       <h3 className='header-text'>Menu</h3>
      </div>
        <div className='div-container'>
       
          <a>Email</a>
          <a>Alterar senha</a>
          <a>Favoritos</a>   
          <a>Sair</a> 
        </div>
    </>
  )
}

export default Menu