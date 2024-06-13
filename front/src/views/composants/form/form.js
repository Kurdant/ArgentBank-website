import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../userSlice';
import './form.css';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.body.token;
        sessionStorage.setItem('token', token);
        if (rememberMe) {
          localStorage.setItem('token', token);
        }
        const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (profileResponse.status === 200) {
          const userData = profileResponse.data.body;
          userData.token = token;
          sessionStorage.setItem('user', JSON.stringify(userData));
          if (rememberMe) {
            localStorage.setItem('user', JSON.stringify(userData));
          }
          dispatch(setUser(userData));
        }
        console.log('Form submitted:', email, password);
      } else {
        console.log("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  if (isAuthenticated) {
    console.log('User is already authenticated, redirecting...');
    window.location.href = "/user";
    return null;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Form;
