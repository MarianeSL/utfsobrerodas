import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Destino.css'
// import MapaIndoor from '../../shared/Mapa';

function Destino() {

  const navigate = useNavigate();


  function selecionaDestino() {

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
        {/* <MapaIndoor/> */}
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