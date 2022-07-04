import React from "react";

/**
 * A basic button styled with boostrap.
 * @param text String, the text display.
 * @param className String, additional classes.
 * @param handler Function, which function executes on click. 
 */
const Button = ({ text, className, handler }) => {

    return (
        <button
            type="button"
            className={`${className ? "btn " + className : "btn"}`}
            onClick={handler}
        >
            {text}
        </button>
    )

}


export default Button;