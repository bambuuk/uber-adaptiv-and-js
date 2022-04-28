import { Component } from "react";
import uberLogo from '../../img/logo/Uber.png';
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
            <header>
                <nav>
                    <div className="container">
                        <ul 
                        className={`menu ${styleMenu}`}
                        onClick={this.toggleHamburgerMenuActive}>
                            <li className="menu_item"><a href="#main" className="menu_link">Главная</a></li>
                            <li className="menu_item"><a href="#require" className="menu_link">Со своим автомобилем</a></li>
                            <li className="menu_item"><a href="#require" className="menu_link">На автомобиле компании</a></li>
                            <li className="menu_item"><a href="#requirement" className="menu_link">Требования</a></li>
                            <li className="menu_item"><a href="#contacts" className="menu_link">Контакты</a></li>
                            <li className="menu_item"><a href="#contacts" className="menu_link">Оставить заявку</a></li>
                        </ul>
                    </div>

                    <div 
                        className={`hamburger ${styleHamburger}`}
                        onClick={this.toggleHamburgerMenuActive}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </nav>
                <div className="subheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4 offset-md-1">
                                <a href="#main" className="subheader_logo"><img src={uberLogo} alt="logo" /></a>
                                <div id="main" className="subheader_official">Официальный партнер Uber</div>
                            </div>

                            <div className="xs-hidden col-6 col-md-3 offset-md-1 col-xl-2 offset-xl-2">
                                <div id="contacts" className="subheader_call">Звоните нам ежедневно</div>
                                <a href="tel:84957970988" className="subheader_phone">+380992380623</a>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2">
                                <a href="tel:84957970988" className="xs-visible subheader_phone">+380 495 797 09 88</a>
                                <button className="subheader_btn">заказать звонок</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;