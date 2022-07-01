import React from "react";


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