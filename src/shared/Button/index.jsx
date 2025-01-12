import './index.css';

export default function Button({ type, onClick, buttonname }) {
       return(
        <button
        type={type}
        onClick={onClick}
        >{buttonname}
        </button>
       )
}