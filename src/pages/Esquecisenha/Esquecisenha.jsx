import Input from '/src/shared/Input'
import Button from '../../shared/Button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Esquecisenha.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Esquecisenha() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const redefinirsenha = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => setEmailSent(true))
            .catch((error) => alert(error));
    }
    return (
        <div className='form-container'>
            {
                emailSent ?
                    <div>
                        <h4>
                            E-mail enviado com sucesso! </h4>    
                        <h4>Por favor, cheque seu e-mail.</h4>
                        <Button
                            onClick={() => navigate('/')}
                            buttonname={'Ir para o Login'}
                        />
                    </div>
                    :
                    <>
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
                    </>
            }
        </div>
    )
}


export default Esquecisenha