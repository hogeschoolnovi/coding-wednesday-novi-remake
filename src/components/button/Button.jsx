import './Button.css'
import {ArrowRight} from "@phosphor-icons/react";

function Button({label, name, onClick, arrow}) {
    return (
        <button type="button"
                className={name}
                onClick={onClick}
        >
            {label}
            {arrow === true && <ArrowRight size={25}/>}


        </button>
    )
}

export default Button;