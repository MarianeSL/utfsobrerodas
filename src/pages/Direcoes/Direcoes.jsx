// Direcoes.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '/src/shared/Button';
import { BsChevronCompactLeft } from 'react-icons/bs';
import './Direcoes.css';

function Direcoes() {
    const location = useLocation();
    const navigate = useNavigate();

    // Garante que recebemos o array de direções ou um fallback
    const direcoes = location.state?.direcoes || ["Nenhuma instrução disponível"];

    return (
        <div className="container-direcoes">
            <div className="container-header-direcoes">
                <div className='back-icon' onClick={() => window.history.back()}>
                    <BsChevronCompactLeft />
                </div>
                <h3>Direções</h3>
            </div>
            {direcoes.length > 0 ? (
                direcoes.map((instrucao, index) => (
                    <p className="item-direcao">
                        {instrucao}
                    </p>
                ))
            ) : (
                <p>Nenhuma instrução disponível.</p>
            )}
            <div className="container-botao">
                <Button onClick={() => navigate('/rota')} buttonname="Voltar" />
            </div>
        </div>
    );
}

export default Direcoes;
