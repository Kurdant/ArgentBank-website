import '../header/header.css'
import argentBankLogo from '../../../assets/argentBankLogo.png'

export function Header() {
  return (
    <div id="HeaderParent">
      <div>
        <img src={argentBankLogo} alt='argentBankLogo' className='argentBankLogo'/>
      </div>
      <div>
        <div>Logo</div>
        <div>Sign In</div>
      </div>
    </div>
  );
}

export default Header;
