import { Component } from "react";
import HeaderView from "./HeaderView";
import '../header/header.sass';

class Header extends Component {

    state = {
        active: false
    }

    toggleHamburgerMenuActive = () => {
        this.setState(({active}) => ({active: !active}))
    }

    render() {
        const {active} = this.state;
        let styleHamburger = active ? 'hamburger_active' : '';
        let styleMenu = active ? 'menu_active' : '';

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