import React from "react";
import './button.css'

function Button(props) {
    return (
    <div className="ParentButton">
        <button className="button" type={props.type} onClick={props.onClick}>{props.text}</button>
    </div>
    )
}

export default Button;