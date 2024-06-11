import React from "react";
import Button from "../button/button";
import './cardMoney.css'

function CardMoney(props) {
    return(
        <section class="account">
            <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Checking (x8349)</h3>
            <p class="account-amount">{props.money}</p>
            <p class="account-amount-description">Available Balance</p>
            </div>
            <div class="account-content-wrapper cta">
            <Button text="View transactions"/>
            </div>
        </section>
    )
} 

export default CardMoney;