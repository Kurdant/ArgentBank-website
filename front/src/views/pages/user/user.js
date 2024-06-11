import React from 'react';
import Header from '../../composants/header/header.js';
import Footer from '../../composants/footer/footer.js';
import Button from '../../composants/button/button.js';
import CardMoney from '../../composants/cardMoney/cardMoney.js';
import './user.css'


function User() {
  return (
    <div className="bg-dark">
        <Header/>
        <div><h1>Welcome back</h1></div>
        <div>Variable pr le nom</div>
        <Button text='Edit Name'/>
        <CardMoney/>
        <CardMoney/>
        <CardMoney/>
        <Footer/>
    </div>
  );
}


export default User;
