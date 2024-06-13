import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Modal from '../../composants/modal/modal.js';
import Header from '../../composants/header/header.js';
import Footer from '../../composants/footer/footer.js';
import Button from '../../composants/button/button.js';
import CardMoney from '../../composants/cardMoney/cardMoney.js';
import './user.css';

function User() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const firstName = useSelector((state) => state.user.userName);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/sign-in';
      return;
    }
  }, [isAuthenticated]);

  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  const addPerson = async (e) => {
    e.preventDefault();
    console.log('test', e.target.name.value);
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
        console.log('Mise à jour réussie')
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

  return (
    <div className="bg-dark">
      <Header />
      <div>
        <h1>Welcome back<br />{firstName ? firstName : 'User'}</h1>
      </div>
      <Button text='Edit Name' onClick={editName} />
      {showModal && <Modal addPerson={addPerson} onClose={closeModal} />}
      <CardMoney />
      <CardMoney />
      <CardMoney />
      <Footer />
    </div>
  );
}

export default User;
