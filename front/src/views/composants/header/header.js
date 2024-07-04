import '../header/header.css';
import argentBankLogo from '../../../assets/argentBankLogo.png';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logoutAndRedirect } from '../../../ReduxToolkit/auth';

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    dispatch(logoutAndRedirect(navigate));
  };

  return (
    <div id="Header">
      <div className='header-logo'>
        <Link to="/">
          <img src={argentBankLogo} alt='argentBankLogo' className='argent-bank-logo'/>
        </Link>
      </div>
      <div className='header-is-connected'>
        {isAuthenticated ? (
          <>
            <div className='Connected style_connect'><i className="fa fa-user-circle"></i><Link to='/user'>{userName ? userName : 'User'}</Link></div>
            <div className='SignOut style_connect' onClick={handleLogout}><i className="fa fa-sign-out"></i><p> Sign Out</p></div>
          </>
        ) : (
          <div className='SignIn style_connect'><Link to='/sign-in'><i className="fa fa-user-circle"></i>Sign In</Link></div>
        )}
      </div>
    </div>
  );
}

export default Header;
