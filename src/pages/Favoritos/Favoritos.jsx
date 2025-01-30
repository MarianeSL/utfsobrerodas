import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import './Favoritos.css';
import { BsTrashFill } from "react-icons/bs";

function Favoritos() {

  return (
    <>
      <div className='container-fav'>
        <div className='back-icon' onClick={() => window.history.back()}>
          <BsChevronCompactLeft />
        </div>
        <h3 className='header-text'>Favoritos</h3>
      </div>
      <div className='div-container-fav'>
        <div className='fav-lixo'>
          <a className='a-favorito'>Favorito 1</a>
          <div className='lixo'><BsTrashFill /></div>
        </div>
        <div className='fav-lixo'>
          <a className='a-favorito'>Favorito 2</a>
          <div className='lixo'><BsTrashFill /></div>
        </div>
        <div className='fav-lixo'>
          <a className='a-favorito'>Favorito 3</a>
          <div className='lixo'><BsTrashFill /></div>
        </div>
      </div>


    </>
  );
}

export default Favoritos;
