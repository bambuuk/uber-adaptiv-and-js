import { useState, useContext } from 'react';
import HeaderView from './HeaderView';
import ThemeContext from '../../context/ThemeContext';
import './header.sass';

function Header() {
  const [active, setActive] = useState(false);
  const { chooseTheme, theme } = useContext(ThemeContext);

  const toggleHamburgerMenuActive = (e) => {
    if (e.type === 'click' || e.code === 'Enter') {
      setActive(!active);
    }
  };

  const styleHamburger = active ? 'hamburger_active' : '';
  const styleMenu = active ? 'menu_active' : '';

  return (
    <HeaderView
      styleHamburger={styleHamburger}
      styleMenu={styleMenu}
      toggleHamburgerMenuActive={toggleHamburgerMenuActive}
      chooseTheme={chooseTheme}
      theme={theme}
    />
  );
}

export default Header;
