import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Origem.css'
import MapboxComponent from '../../shared/Map/Mapcomponent';

function Origem() {

  const navigate = useNavigate();


  function selecionaOrigem() {
    navigate('/destino')
  }

  return (
    <>
      <div className='header'>
        <div onClick={() => navigate('/menu')}>
          <BsList />
        </div>
      </div>
      <div className='div-body'>
        <h3 className='seleciona-local'>Onde você está?</h3>
        <div className='mapa'>
        <MapboxComponent/>
        </div>
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