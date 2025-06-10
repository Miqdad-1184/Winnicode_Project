import '../../../css/layout.css';
import Image from '../../../assets/jurnalis.png';
import Logo from '../../../assets/logo2.png';

export default function AuthSideImage() {
  return (
    <div className="authSideImage">
      <img src={Image} className="imageBackground" alt="Auth Side" />
      <img src={Logo} className='logo' alt="" />
    </div>
  );
}