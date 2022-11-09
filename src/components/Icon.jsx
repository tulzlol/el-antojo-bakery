import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

function Icon (name) {
        switch (name) {
            case "cart":
                    return (<FontAwesomeIcon icon={faCartShopping} />)
            default: return(
                <FontAwesomeIcon icon={faExclamationTriangle}/> 
            )
        }
}

export default Icon;