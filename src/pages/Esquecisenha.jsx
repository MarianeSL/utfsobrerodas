import Input from '/src/shared/Input'
import Button from '../shared/Button'
import React from 'react'

function Esquecisenha(){
    const redefinirsenha = () =>{
        console.log('Email enviado')
    }
    return(
        <div className='form-container'>
            <p>Insira o e-mail cadastrado para receber o e-mail de redefinição.</p>
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