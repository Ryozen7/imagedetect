import React from 'react';




export default function Input({ type, name, onEnter, value, id, placeholder, onChangeValue, addClassName}) {


    return (
        <input
            className={`${addClassName}`}
            type={type}
            value={value}
            name={name}
            onKeyPress={onEnter}
            placeholder={placeholder}
            onChange={onChangeValue}
            id={id}
        />
    )
}