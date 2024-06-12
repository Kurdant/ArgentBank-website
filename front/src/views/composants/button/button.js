import React from "react";
import './button.css'

function Button(props) {
    return (
    <div className="ParentButton">
        <button className="button" type="button">{props.text}</button>
    </div>
    )
}

export default Button;