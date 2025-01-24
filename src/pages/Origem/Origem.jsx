import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Origem.css'
// import MapaIndoor from '../../shared/Mapa';

function Origem() {

  const navigate = useNavigate();


  function selecionaOrigem() {
    
  }

  return (
    <>
      <div className='menu'>
      <BsList 
      onClick={navigate('/menu')}/>
      </div>
        <div className='div-container'>
          <h3 className='seleciona-local'>Onde você está?</h3>
          {/* <MapaIndoor/> */}
          <Button
            onClick={selecionaOrigem}
            buttonname={'Selecionar'}
          />
          <BsHeart />
          <BsHeartFill />
        </div>
    </>
  )
}

export default Origem