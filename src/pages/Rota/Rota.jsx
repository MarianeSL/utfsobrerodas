// Rota.js
import React, { useContext, useEffect, useState } from 'react';
import Button from '/src/shared/Button';
import { useNavigate } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import './Rota.css';
import MapboxComponent from '../../shared/Map/Mapcomponent';
import { LocationContext } from '../../context/Locationcontext';

function Rota() {
  const navigate = useNavigate();
  const { origin, destination } = useContext(LocationContext);
  const [route, setRoute] = useState(null);

  const [favorito, setFavorito] = useState(false);
  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  useEffect(() => {
    if (origin && destination) {
      calculateRoute();
    }
  }, [origin, destination]);

  const calculateRoute = async () => {
    const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyeXNsIiwiYSI6ImNtNmg2MXZtMjA4cm0yanBvMTBsdHJ6bmMifQ.es9nbCj8awzBF6kuOKh1pw';
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;

    const response = await fetch(url);
    const data = await response.json();
    setRoute(data.routes[0].geometry); 
  };

  return (
    <>
      <div className='header'>
        <div onClick={() => navigate('/menu')}>
          <BsList />
        </div>
      </div>
      <div className='div-body-rota'>
        <h3 className='seleciona-local'>Sua rota está pronta!</h3>
        <div className='mapa'>
          <MapboxComponent route={route} />
        </div>
        <div className='favoritar' onClick={toggleFavorito}>
        {favorito ? <BsHeartFill /> : <BsHeart />}
        </div>
        <Button
          onClick={() => navigate('/destino')}
          buttonname={'Ver direções'}
        />
        <Button
          onClick={() => navigate('/origem')}
          buttonname={'Nova rota'}
        />
        
      </div>
    </>
  );
}

export default Rota;