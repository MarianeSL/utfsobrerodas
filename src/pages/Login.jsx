import React from 'react'
import wheelchair from '/src/assets/wheelchair.svg'
import Input from '/src/shared/Input'
import Button from '/src/shared/Button'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const titulo = "UTF sobre rodas"
  const navigate = useNavigate();
  function realizalogin(){
    
  }
  const esquecisenha = () =>{
    navigate('/esquecisenha');
  }

  function cadastro() {
    
  }
 
  return (
    <>
      <div>
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
          placeholder={'Digite sua senha'}
        />
        <Button
          onClick={esquecisenha}
          buttonname={<u>Esqueci minha senha</u>}
          simples={true}
        />  
      
        <Button
          onClick={realizalogin}
          buttonname={'Login'}
        />  
        <p>Ou clique aqui para se <Button
          onClick={cadastro}
          buttonname={<b>cadastrar</b>}
          simples={true}
        /></p>
        </div>   
    </>
  )
}

export default Login