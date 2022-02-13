import React from 'react';




export default function Input({ type, name, placeholder, onChangeValue, addClassName}) {


    return (
        <input
            className={`${addClassName}`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChangeValue}
        />
    )
}