import React, { useState } from 'react'
import wheelchair from '/src/assets/wheelchair.svg'
import Input from '/src/shared/Input'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { auth_mod } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {

  const titulo = "UTF sobre rodas"
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function realizalogin() {
    signInWithEmailAndPassword(auth_mod, email, password)
    .then(() => navigate('/Origem'))
    .catch(error => alert(error))
  }
 
  return (
    <>
      <div className='logo'>
        <h1 className='titulo'>{titulo}</h1>
        <img src={wheelchair} className="wheelchair" alt="Desenho de uma cadeira de rodas" />
      </div>
        <div className='form-login-container'>
          <p className='form-login'>E-mail</p>
          <Input
            value={email}
            type={'email'}
            placeholder={'e-mail@dominio.com'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='form-login'>Senha</p>
          <Input 
            value={password}
            type={'password'}
            placeholder={'Digite sua senha'}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <a className='a-login' href='/esquecisenha'><u>Esqueci minha senha</u></a>

          <Button
            onClick={realizalogin}
            buttonname={'Login'}
          />
          <a className='a-login' href='/cadastro'>Ou clique aqui para se <strong>cadastrar</strong></a>
        </div>
    </>
  )
}

export default Login