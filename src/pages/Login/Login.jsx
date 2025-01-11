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
    .then(() => navigate('/Cadastro'))
    .catch(error => alert(error))
  }
  const esquecisenha = () => {
    navigate('/esquecisenha');
  }

  function cadastro() {
    navigate('/Cadastro')
  }

  return (
    <>
      <div className='logo'>
        <h1>{titulo}</h1>
        <img src={wheelchair} className="wheelchair" alt="Desenho de uma cadeira de rodas" />
      </div>
        <form className='form-container'>
          <p>E-mail</p>
          <Input
            value={email}
            type={'email'}
            placeholder={'e-mail@dominio.com'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Senha</p>
          <Input 
            value={password}
            type={'password'}
            placeholder={'Digite sua senha'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={esquecisenha}
            buttonname={<u>Esqueci minha senha</u>}
            simples={true}
          />

          <Button
            onClick={realizalogin}
            buttonname={'Login'}
            type={'submit'}
          />
          <a href='/cadastro'>Ou clique aqui para se <strong>cadastrar</strong></a>
        </form>
    </>
  )
}

export default Login