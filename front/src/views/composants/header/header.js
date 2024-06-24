import '../header/header.css';
import argentBankLogo from '../../../assets/argentBankLogo.png';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { checkAuth, logoutAndRedirect } from '../utils/auth';

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.userName);

  useEffect(() => {
    checkAuth(dispatch, navigate);
  }, [dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logoutAndRedirect(navigate));
  };

  return (
    <div id="Header">
      <div>
        <Link to="/">
          <img src={argentBankLogo} alt='argentBankLogo' className='argent-bank-logo'/>
        </Link>
      </div>
      <div className='header-is-connected'>
        {isAuthenticated ? (
          <>
            <div className='Connected style_connect'><i className="fa-solid fa-circle-user"></i><Link to='/user'>{userName ? userName : 'User'}</Link></div>
            <div className='SignOut style_connect' onClick={handleLogout}><i className="fa-solid fa-sign-out-alt"></i> Log Out</div>
          </>
        ) : (
          <div className='SignIn style_connect'><Link to='/sign-in'><i className="fa-solid fa-circle-user"></i>Sign In</Link></div>
        )}
      </div>
    </div>
  );
}

export default Header;
