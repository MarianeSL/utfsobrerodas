// Destino.js
import React, { useContext } from 'react';
import Button from '/src/shared/Button';
import { useNavigate } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Destino.css';
import MapboxComponent from '../../shared/Map/Mapcomponent';
import { LocationContext } from '../../context/Locationcontext';

function Destino() {
  const navigate = useNavigate();
  const { setDestination } = useContext(LocationContext);

  function selecionaDestino(marker) {
    setDestination(marker);
    navigate('/rota');
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
          <MapboxComponent onSelectLocation={selecionaDestino} />
        </div>
        <BsHeart />
        <BsHeartFill />
      </div>
    </>
  );
}

export default Destino;