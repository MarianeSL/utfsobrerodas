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
import * as turf from "@turf/turf";

function Rota() {
  const navigate = useNavigate();
  const { origin, destination } = useContext(LocationContext);
  const [route, setRoute] = useState(null);
  const [favorito, setFavorito] = useState(false);
  const [blocos, setBlocos] = useState(null);
  const [rotas, setRotas] = useState(null);

  const Favorito = () => {
    const [favorito, setFavorito] = useState(false); }
  
    const toggleFavorito = () => {
      setFavorito(!favorito); 
    };

  useEffect(() => {
    fetch('/blocos.geojson')
      .then(response => response.json())
      .then(data => setBlocos(data))
      .catch(error => console.error("Erro ao carregar Blocos GeoJSON:", error));

    fetch('/rotas.geojson')
      .then(response => response.json())
      .then(data => setRotas(data))
      .catch(error => console.error("Erro ao carregar Rotas GeoJSON:", error));
  }, []);

  const verificaSePontoEstaNoBloco = (ponto) => {
    if (!blocos) return false;

    const pontoTurf = turf.point([ponto.longitude, ponto.latitude]);
    for (const bloco of blocos.features) {
      const poligono = turf.polygon(bloco.geometry.coordinates);
      if (turf.booleanPointInPolygon(pontoTurf, poligono)) {
        return true;
      }
    }
    return false;
  };

  const encontraRota = () => {
    if (!rotas) return;

    let rotaEncontrada = null;
    let menorDistancia = Infinity;

    for (const rota of rotas.features) {
      const linha = turf.lineString(rota.geometry.coordinates);
      const pontoOrigem = turf.point([origin.longitude, origin.latitude]);
      const pontoDestino = turf.point([destination.longitude, destination.latitude]);

      // Verifica se origem e destino estão próximos da linha da rota
      const distanciaOrigem = turf.pointToLineDistance(pontoOrigem, linha, { units: "meters" });
      const distanciaDestino = turf.pointToLineDistance(pontoDestino, linha, { units: "meters" });

      if (distanciaOrigem + distanciaDestino < menorDistancia) {
        menorDistancia = distanciaOrigem + distanciaDestino;
        rotaEncontrada = rota;
      }
    }
        
    if (!rotaEncontrada) {
      alert("Nenhuma rota foi encontrada dentro desse bloco!");
      setRoute(null);
      return;
    }

  // Conectar os pontos à rota caso não estejam nela
  const pontoOrigemMaisProximo = turf.nearestPointOnLine(
    turf.lineString(rotaEncontrada.geometry.coordinates), 
    turf.point([origin.longitude, origin.latitude])
  );

  const pontoDestinoMaisProximo = turf.nearestPointOnLine(
    turf.lineString(rotaEncontrada.geometry.coordinates), 
    turf.point([destination.longitude, destination.latitude])
  );

  // Criar um novo GeoJSON com os pontos conectados
  const novaRota = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [origin.longitude, origin.latitude],  // Começa na origem
        pontoOrigemMaisProximo.geometry.coordinates, // Conecta à rota
        ...rotaEncontrada.geometry.coordinates, // Caminho original
        pontoDestinoMaisProximo.geometry.coordinates, // Conecta ao destino
        [destination.longitude, destination.latitude] // Termina no destino
      ]
    }
  };

  setRoute(novaRota.geometry);
};

useEffect(() => {
  if (origin && destination && blocos && rotas) {
    if (verificaSePontoEstaNoBloco(origin) && verificaSePontoEstaNoBloco(destination)) {
      encontraRota();
    } else {
      alert("Desculpe, mas ainda não mapeamos o(s) bloco(s) selecionado(s)!");
      setRoute(null);
    }
  }
}, [origin, destination, blocos, rotas]);

  

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
        <div className='botoes-rota'>
          <Button
            onClick={() => navigate('/destino')}
            buttonname={'Ver direções'}
          />
          <Button
            onClick={() => navigate('/origem')}
            buttonname={'Nova rota'}
          />
        </div>
      </div>
    </>
  );
}

export default Rota;