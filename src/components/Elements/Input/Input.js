import React from "react";


const Input = ({ type, autoFocus, value, handler, placeholder, className }) => {
    return (
        <input type={type}
            autoFocus={autoFocus}
            className={`${className ? "form-control " + className : "form-control"}`}
            placeholder={placeholder}
            value={value}
            onChange={e => { handler(e.target.value) }}
        />
    )
}

export default Input