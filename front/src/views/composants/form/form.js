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
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
  }, [isAuthenticated, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const userData = {
          email: email,
          token: response.data.body.token,
        };

        localStorage.setItem('token', response.data.body.token);
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          localStorage.removeItem('user');
        }
        dispatch(setUser(userData)); // Dispatcher l'action pour mettre à jour le store Redux
        console.log('Form submitted:', email, password);
      } else {
        console.log("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Redirection si déjà authentifié
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
