import React from "react";
import ButtonTransactions from "../buttonTransactions/buttonTransactions";
import './cardMoney.css'

function CardMoney(props) {
    return(
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{props.uppertexte}</h3>
            <p className="account-amount">{props.money}</p>
            <p className="account-amount-description account-title">{props.balance}</p>
            </div>
            <div className="account-content-wrapper cta">
            <ButtonTransactions text="View transactions"/>
            </div>
        </section>
    )
} 

export default CardMoney;