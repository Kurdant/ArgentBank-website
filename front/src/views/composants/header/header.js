import '../header/header.css'
import argentBankLogo from '../../../assets/argentBankLogo.png'

export function Header() {
  return (
    <div id="HeaderParent">
      <div>
        <img src={argentBankLogo} alt='argentBankLogo' className='argentBankLogo'/>
      </div>
      <div className='HeaderEnfant'>
        <div className='logoSignIn'><a href='/sign-in'><i class="fa-solid fa-circle-user"></i>Sign In</a></div>
      </div>
    </div>
  );
}

export default Header;
