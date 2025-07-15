import { useState } from 'react';
import '../../../css/layout.css';
import headerLogo from '../../../assets/logo.png';
import Search from '../input/search';
import ButtonTheme from '../button/buttonTheme';
import ButtonProfile from '../button/buttonProfile';
import { FaBars } from 'react-icons/fa';

export default function Header({ author }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <img src={headerLogo} className="headerLogo" alt="winnicode logo" />
      <div className="search desktopOnly"><Search /></div>
      <div className="headerRight desktopOnly">
        <ButtonProfile />
        <ButtonTheme />
      </div>
      <div className="burgerButtonHome mobileOnly" onClick={toggleMenu}>
        <FaBars/>
      </div>
      {showMenu && (
        <div className="mobileMenu">
          <div className='mobileButton'>
            <ButtonProfile />
            <ButtonTheme />
          </div>
          <Search />
        </div>
      )}
    </div>
  );
}
