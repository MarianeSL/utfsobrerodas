import Input from '/src/shared/Input'
import Button from '../../shared/Button'
import React from 'react'
import './Esquecisenha.css'

function Esquecisenha(){
    const redefinirsenha = () =>{
        console.log('Email enviado')
    }
    return(
        <div className='form-container'>
            <p>Digite o e-mail cadastrado</p>
            <Input
            placeholder={'e-mail@dominio.com'}
            />
            <Button
            onClick={redefinirsenha}
            buttonname={'Enviar'}
            />
        </div>
    )
}


export default Esquecisenha