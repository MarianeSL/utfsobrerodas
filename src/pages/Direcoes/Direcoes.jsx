// Direcoes.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '/src/shared/Button';

function Direcoes() {
  const location = useLocation();
  const navigate = useNavigate();

  // Garante que recebemos o array de direções ou um fallback
  const direcoes = location.state?.direcoes || ["Nenhuma instrução disponível"];

  return (
    <div className="direcoes-container">
      <h3>Instruções da Rota</h3>
      <ul>
        {direcoes.length > 0 ? (
          direcoes.map((instrucao, index) => (
            <li key={index}>{instrucao}</li>
          ))
        ) : (
          <p>Nenhuma instrução disponível.</p>
        )}
      </ul>
      <Button onClick={() => navigate('/rota')} buttonname="Voltar" />
    </div>
  );
}

export default Direcoes;
