import { Component } from 'react';
import HeaderView from './HeaderView';

import './header.sass';

class Header extends Component {
  // eslint-disable-next-line
  state = {
    active: false
  };

  toggleHamburgerMenuActive = (e) => {
    if (e.type === 'click' || e.code === 'Enter') {
      this.setState(({ active }) => ({ active: !active }));
    }
  };

  render() {
    const { active } = this.state;
    const styleHamburger = active ? 'hamburger_active' : '';
    const styleMenu = active ? 'menu_active' : '';

    return (
      <HeaderView
        styleHamburger={styleHamburger}
        styleMenu={styleMenu}
        toggleHamburgerMenuActive={this.toggleHamburgerMenuActive}
      />
    );
  }
}

export default Header;
