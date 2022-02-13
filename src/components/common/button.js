import React from 'react';




export default function Button({children, disabled, handleClick, addClassName}) {


    return (
        <button 
            className={`${addClassName}`} 
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}