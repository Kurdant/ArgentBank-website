import '../header/header.css';
import argentBankLogo from '../../../assets/argentBankLogo.png';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../userSlice';

export function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    window.location.href = "/";
  };

  return (
    <div id="HeaderParent">
      <div>
        <a href="/">
        <img src={argentBankLogo} alt='argentBankLogo' className='argentBankLogo'/>
        </a>
      </div>
      <div className='HeaderEnfant'>
        {isAuthenticated ? (
          <>
            <div className='Connected style_connect'><i className="fa-solid fa-circle-user"></i><a href='/user'> {userName ? userName : 'User'}</a></div>
            <div className='SignOut style_connect' onClick={handleLogout}><i className="fa-solid fa-sign-out-alt"></i> Log Out</div>
          </>
        ) : (
          <div className='SignIn style_connect'><a href='/sign-in'><i className="fa-solid fa-circle-user"></i>Sign In</a></div>
        )}
      </div>
    </div>
  );
}

export default Header;
