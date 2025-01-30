import React, { useState, useEffect } from 'react';
import Button from '/src/shared/Button';
import { useNavigate } from 'react-router-dom';
import { BsChevronCompactLeft } from 'react-icons/bs';
import './Menu.css';
import { getAuth, signOut } from "firebase/auth";

function Menu() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email); // Pega o e-mail do usuário logado
      } else {
        setUserEmail(null); // Se não estiver logado, limpa o e-mail
      }
    });

    return () => unsubscribe(); // Limpeza do listener ao desmontar o componente
  }, []);

  function Sair() {
    const auth = getAuth();
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => alert(error));
  }

  return (
    <>
      <div className='container-menu'>
        <div className='back-icon' onClick={() => window.history.back()}>
          <BsChevronCompactLeft />
        </div>
        <h3 className='header-text'>Menu</h3>
      </div>
      <div className='div-body-menu'>
        <a className="email-link">E-mail: {userEmail}</a> {/* Agora exibe "Email: (email)" */}
        <a className='a-menu' href='/esquecisenha'>Alterar senha</a>
        <a className='a-menu' href='/favoritos'>Favoritos</a>
        <a className='a-menu' onClick={Sair}>Sair</a>
      </div>


    </>
  );
}

export default Menu;
