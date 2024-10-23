import './index.css';

export default function Button({ onClick, buttonname, simples }) {
    return ( simples ?
        <button className='simples'
        onClick={onClick}
        >{buttonname}</button> 
        :
        <button
        onClick={onClick}
        >{buttonname}</button>

    )
}