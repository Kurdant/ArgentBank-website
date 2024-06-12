import React from "react";
import ButtonTransactions from "../buttonTransactions/buttonTransactions";
import './cardMoney.css'

function CardMoney(props) {
    return(
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">{props.money}Test en attendant</p>
            <p className="account-amount-description account-title">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <ButtonTransactions text="View transactions"/>
            </div>
        </section>
    )
} 

export default CardMoney;