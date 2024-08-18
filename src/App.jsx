import { useState } from 'react'
import './App.css'
import wheelchair from './assets/wheelchair.svg'

function App() {
  const [count, setCount] = useState(0)
  const titulo = "UTF sobre rodas"

  function realizalogin(){
    console.log("botão foi clicado")
  }

  return (
    <>
      <div>
        <h1>{titulo}</h1>
        <img src={wheelchair} className="wheelchair" alt="Desenho de uma cadeira de rodas" />
      </div>  
      <div>
        <p>E-mail</p>
        <input placeholder="e-mail@dominio.com"/>
        <p>Senha</p>
        <input placeholder="Digite sua senha"/>
        <p><u>Esqueci minha senha</u></p>
        <button onClick={realizalogin}>Login</button>
        <p>Ou clique aqui para se <b>cadastrar</b></p>
        </div>   
    </>
  )
}

export default App
