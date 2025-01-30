import React from 'react'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Rota.css'
import MapboxComponent from '../../shared/Map/Mapcomponent';

function Rota() {

  const navigate = useNavigate();


  function mostradirecao() {
    navigate('/destino')
  }

  return (
    <>
      <div className='header'>
        <div onClick={() => navigate('/menu')}>
          <BsList />
        </div>
      </div>
      <div className='div-body-rota'>
        <h3 className='header-text-rota'>Sua rota está pronta!</h3>
        <div className='mapa'>
        <MapboxComponent/>
        </div>
        <Button
          onClick={mostradirecao}
          buttonname={'Ver direções'}
        />
        <Button
          onClick={() => navigate('/origem')}
          buttonname={'Nova rota'}
        />
        <BsHeart />
        <BsHeartFill />
      </div>
    </>
  )
}

export default Rota