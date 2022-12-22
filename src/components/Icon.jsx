import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Icon = (cartName) => {
        switch (cartName) {
                case "cart":
                        return (<FontAwesomeIcon icon={faCartShopping} />)
                case "trash":
                        return (<FontAwesomeIcon icon={faTrash} />)
                default: return (
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                )
        }
}

export default Icon;