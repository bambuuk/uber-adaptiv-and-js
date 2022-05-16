import { Link } from 'react-router-dom';
import uberLogo from '../../img/logo/Uber.png';

const HeaderView = function(props) {
    const {styleHamburger, styleMenu, toggleHamburgerMenuActive} = props;
    return (
        <header>
            <nav>
                <div className="container">
                    <ul 
                    className={`menu ${styleMenu}`}
                    onClick={toggleHamburgerMenuActive}>
                        <li className="menu_item"><Link to="/" href="#main" className="menu_link">Главная</Link></li>
                        <li className="menu_item"><a href="#require" className="menu_link">Со своим автомобилем</a></li>
                        <li className="menu_item"><a href="#require" className="menu_link">На автомобиле компании</a></li>
                        <li className="menu_item"><a href="#requirement" className="menu_link">Требования</a></li>
                        <li className="menu_item"><a href="#contacts" className="menu_link">Контакты</a></li>
                        <li className="menu_item"><Link className="menu_link" href="#contacts" to="/choise-car">Выбор авто</Link></li>
                    </ul>
                </div>

                <div 
                    className={`hamburger ${styleHamburger}`}
                    onClick={toggleHamburgerMenuActive}>
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

export default HeaderView;