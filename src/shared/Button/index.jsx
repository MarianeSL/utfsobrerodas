import './index.css';

export default function Button({ type, onClick, buttonname, simples }) {
    return ( simples ?
        <button 
            className='simples'
            onClick={onClick}
        >{buttonname}</button> 
        :
        <button
        type={type}
        onClick={onClick}
        >{buttonname}</button>

    )
}