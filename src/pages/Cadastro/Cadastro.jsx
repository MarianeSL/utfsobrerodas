import React, { useState } from 'react'
import './Cadastro.css'
import wheelchair from '/src/assets/wheelchair.svg'
import Input from '/src/shared/Input'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../../firebase/config'

function Cadastro() {
  
  const titulo = "UTF sobre rodas"
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  function realizacadastro(){
    if (password!==confirmpassword){
    return alert('As senhas tem que ser iguais!');
    }
    
    createUserWithEmailAndPassword(auth_mod, email, password)
    .then(() => navigate('/'))
    .catch(error => alert(error))
    
  }
  
 
  return (
    <>
      <div className='logo'>
        <h1>{titulo}</h1>
        <img src={wheelchair} className="wheelchair" alt="Desenho de uma cadeira de rodas" />
      </div>  
      <div className='form-container'>
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
          placeholder={'Digite uma senha'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Repita a senha</p>
        <Input
          value={confirmpassword}
          type={'password'}
          placeholder={'Digite a senha novamente'}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <Button
          onClick={realizacadastro}
          buttonname={'Cadastrar'}
        />  
        <a href='/'><u>Já possui cadastro? Clique aqui para fazer login</u></a>
        </div>   
    </>
  )
}

export default Cadastro