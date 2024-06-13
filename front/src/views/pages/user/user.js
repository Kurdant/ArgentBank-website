// User.js
import {React, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Header from '../../composants/header/header.js';
import Footer from '../../composants/footer/footer.js';
import ButtonEditName from '../../composants/button/button.js';
import CardMoney from '../../composants/cardMoney/cardMoney.js';
import './user.css';


function User() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const firstName = useSelector((state) => state.user.userName);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/sign-in';
      return;
    }
  })
  
  return (
    <div className="bg-dark">
      <Header />
      <div>
        <h1>Welcome back<br />{firstName ? firstName : 'User'}</h1>
      </div>
      <ButtonEditName text='Edit Name' />
      <CardMoney />
      <CardMoney />
      <CardMoney />
      <Footer />
    </div>
  );
}

export default User;
