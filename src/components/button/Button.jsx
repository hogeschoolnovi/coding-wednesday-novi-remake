import './Button.css'
import {ArrowRight} from "@phosphor-icons/react";

function Button({label, variant, onClick, hasArrow}) {
    return (
        <button className={variant}
                onClick={onClick}>
            {label}
            {hasArrow === true && <ArrowRight size={25}/>}
        </button>
    )
}

export default Button;