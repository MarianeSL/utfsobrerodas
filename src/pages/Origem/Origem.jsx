// Origem.js
import React, { useContext } from 'react';
import Button from '/src/shared/Button';
import { useNavigate } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Origem.css';
import MapboxComponent from '../../shared/Map/Mapcomponent';
import { LocationContext } from '../../context/Locationcontext';

function Origem() {
  const navigate = useNavigate();
  const { setOrigin } = useContext(LocationContext);

  function selecionaOrigem(marker) {
    setOrigin(marker);
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
          <MapboxComponent onSelectLocation={selecionaOrigem} />
        </div>
        <div className='botão'>
        <Button
          onClick={() => navigate('/destino')}
          buttonname={'Selecionar'}
        />
        </div>
      </div>
    </>
  );
}

export default Origem;