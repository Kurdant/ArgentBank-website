import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { setUser } from '../../../ReduxToolkit/userSlice.js';
import { checkAuth } from '../../../ReduxToolkit/auth.js';
import UsernameForm from '../../composants/username-form/username-form';
import Header from '../../composants/header/header.js';
import Footer from '../../composants/footer/footer.js';
import Button from '../../composants/button/button.js';
import CardMoney from '../../composants/cardMoney/cardMoney.js';
import './user.css';

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const firstName = useSelector((state) => state.user.userName);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    checkAuth(dispatch, navigate);
  }, [isAuthenticated, dispatch, navigate]);

  const token = sessionStorage.getItem('token');

  const addPerson = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
        userName: e.target.name.value,
      }, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (profileResponse.status === 200) {
          const userData = profileResponse.data.body;
          dispatch(setUser(userData));
          sessionStorage.setItem('user', JSON.stringify(userData));
          if (localStorage.getItem('token')) {
            localStorage.setItem('user', JSON.stringify(userData)); 
          }
        } else {
          alert("il y a eu un problème en changeant de nom, veuillez vous reconnecter");
          navigate('/sign-in');
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    setShowModal(false);
  }

  function editName() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const CardMoneyTab = [
    {
      money: "$2,082.79",
      uppertexte: "Argent Bank Checking (x8349)",
      balance: "Available Balance",
    },
    {
      money: "$10,928.42",
      uppertexte: "Argent Bank Savings (x6712)",
      balance: "Available Balance",
    },
    {
      money: "$184.30",
      uppertexte: "Argent Bank Credit Card (x8349)",
      balance: "Current Balance",
    }
  ];

  return (
    <div className='user-page'>
    <div className="bg-dark">
      <Header />
      <div className='username-form'>
        <h1>Welcome back<br />{firstName ? firstName : 'User'}</h1>
      <Button text='Edit Name' onClick={editName} />
      </div>
      {showModal && <UsernameForm addPerson={addPerson} onClose={closeModal} />}
      {CardMoneyTab.map((card, index) => (
      <CardMoney 
            key={index} 
            money={card.money} 
            uppertexte={card.uppertexte} 
            balance={card.balance} 
          />
        ))}
    </div>
    <Footer />
  </div>
  );
}

export default User;
