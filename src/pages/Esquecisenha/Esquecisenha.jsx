import Input from '/src/shared/Input'
import Button from '../../shared/Button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Esquecisenha.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Esquecisenha(){
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const redefinirsenha = () =>{
    sendPasswordResetEmail(auth, email)
    .then(() => navigate('/'))
    .catch((error) => alert(error));
    }
    return(
        <div className='form-container'>
            <p>Digite o e-mail cadastrado</p>
            <Input
                value={email}
                type={'email'}
                placeholder={'e-mail@dominio.com'}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button
            onClick={redefinirsenha}
            buttonname={'Enviar'}
            />
        </div>
    )
}


export default Esquecisenha