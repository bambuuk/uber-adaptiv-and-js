import { Component } from 'react';
import HeaderView from './HeaderView';
import ThemeContext from '../../context/ThemeContext';
import './header.sass';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleHamburgerMenuActive = (e) => {
    if (e.type === 'click' || e.code === 'Enter') {
      this.setState(({ active }) => ({ active: !active }));
    }
  };

  render() {
    const { active } = this.state;
    const { choiseTheme } = this.context;
    const styleHamburger = active ? 'hamburger_active' : '';
    const styleMenu = active ? 'menu_active' : '';

    return (
      <HeaderView
        styleHamburger={styleHamburger}
        styleMenu={styleMenu}
        toggleHamburgerMenuActive={this.toggleHamburgerMenuActive}
        choiseTheme={choiseTheme}
      />
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
