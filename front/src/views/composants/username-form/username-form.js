import React from "react";
import Button from "../button/button";
import './username-form.css'

export default function UsernameForm({ addPerson, onClose }) {
    
    function close() {
        console.log("close");
        onClose();
    }

    return (
        <div className="username-form">
            <h2>Change Username</h2>
            <form id='usernameForm' onSubmit={e => addPerson(e)}>
                <input placeholder="Enter name" name="name" required="required" className="username-input"/>
                <div className="form-buttons">
                    <Button text="OK" type="submit"/>
                    <Button text="Cancel" onClick={close}/>
                </div>
            </form>
        </div>
    );
}
