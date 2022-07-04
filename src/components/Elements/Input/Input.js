import React from "react";

/**
 * A basic input styles in Bootstrap
 * @param type String, type of the input, i.e. password.
 * @param autoFocus Boolean,if the Input is autofocused or not.
 * @param value Generic, handled value, usually passed from a useState().
 * @param handler Function, which function executes on change, usually passed from a useState(). 
 * @param placeholder String, placeholder.
 * @param className String, additional classes.
 */
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