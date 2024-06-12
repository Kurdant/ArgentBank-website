import React from "react";
import './buttonTransactions.css'

function ButtonTransactions(props) {
    return (
    <div className="ParentButton">
        <button className="button buttonTransactions" type="button">{props.text}</button>
    </div>
    )
}

export default ButtonTransactions;