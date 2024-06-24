import React from "react";
import './button.css'

function Button(props) {
    return (
        <div className="button-container">
            <button className="custom-button" type={props.type} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Button;
