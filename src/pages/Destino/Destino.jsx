import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Destino.css'
import MapboxComponent from '../../shared/Map/Mapcomponent';

function Destino() {

  const navigate = useNavigate();


  function selecionaDestino() {
    navigate('/rota')
  }

  return (
    <>
      <div className='header'>
        <div onClick={() => navigate('/menu')}>
          <BsList />
        </div>
      </div>
      <div className='div-container'>
        <h3 className='seleciona-local'>Para onde você quer ir?</h3>
        <div className='mapa'>
          <MapboxComponent />
        </div>
        <Button
          onClick={selecionaDestino}
          buttonname={'Selecionar'}
        />
        <BsHeart />
        <BsHeartFill />
      </div>
    </>
  )
}

export default Destino