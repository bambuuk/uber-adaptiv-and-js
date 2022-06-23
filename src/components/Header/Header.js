import { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';
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
    const choiseTheme = this.props;
    const styleHamburger = active ? 'hamburger_active' : '';
    const styleMenu = active ? 'menu_active' : '';

    return (
      <HeaderView
        styleHamburger={styleHamburger}
        styleMenu={styleMenu}
        toggleHamburgerMenuActive={this.toggleHamburgerMenuActive}
        choiseTheme={choiseTheme.choiseTheme}
      />
    );
  }
}

Header.propTypes = { 
  choiseTheme: PropTypes.func, 
};

Header.defaultProps = { 
  choiseTheme: null
};

export default Header;
