import React from "react";


const Input = ({ type, value, handler, placeholder, className }) => {
    return (
        <input type={type}
            className={`${className ? "form-control " + className : "form-control"}`}
            placeholder={placeholder}
            value={value}
            onChange={e => { handler(e.target.value) }}
        />
    )
}

export default Input