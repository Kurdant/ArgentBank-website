import React from "react";
import Button from "../button/button";
import './modal.css'

export default function Modal({ addPerson, onClose }) {
    
    function close() {
        console.log("close");
        onClose();
    }

    return (
        <div className="modal">
            <h1>Change Username</h1>
            <form id='personForm' onSubmit={e => addPerson(e)}>
                <input placeholder="Enter name" name="name" required="required" className="inputtest"/>
                <div id="buttons">
                    <Button text="OK" type="submit"/>
                    <Button text="Cancel" onClick={close}/>
                </div>
            </form>
        </div>
    );
}
