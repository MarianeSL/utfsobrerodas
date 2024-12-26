import React from 'react'
import './Cadastro.css'
import wheelchair from '/src/assets/wheelchair.svg'
import Input from '/src/shared/Input'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'

function Cadastro() {
  
  const titulo = "UTF sobre rodas"
  const navigate = useNavigate();
  function realizacadastro(){
    navigate('/')
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
          placeholder={'e-mail@dominio.com'}
        />
        <p>Senha</p>
        <Input
          placeholder={'Digite uma senha'}
        />
        <p>Repita a senha</p>
        <Input
          placeholder={'Digite a senha novamente'}
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