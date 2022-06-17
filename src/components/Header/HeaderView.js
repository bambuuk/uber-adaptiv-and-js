import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import uberLogo from '../../img/logo/Uber.png';

function HeaderView(props) {
  const { styleHamburger, styleMenu, toggleHamburgerMenuActive } = props;
  return (
    <header>
      <nav>
        <div className="container">
          <ul // eslint-disable-line
            className={`menu ${styleMenu}`}
            onClick={(e) => toggleHamburgerMenuActive(e)}
            onKeyDown={toggleHamburgerMenuActive}
          >
            <li className="menu_item">
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })} 
                to="/" 
                href="#main" 
                className="menu_link"
              >
                Главная
              </NavLink>
            </li>
            <li className="menu_item"><a href="#require" className="menu_link">Со своим автомобилем</a></li>
            <li className="menu_item"><a href="#require" className="menu_link">На автомобиле компании</a></li>
            <li className="menu_item"><a href="#requirement" className="menu_link">Требования</a></li>
            <li className="menu_item"><a href="#contacts" className="menu_link">Контакты</a></li>
            <li className="menu_item">
              <NavLink 
                end 
                style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })} 
                className="menu_link" 
                href="#contacts" 
                to="/choise-car"
              >
                Выбор авто
              </NavLink>
            </li>
          </ul>
        </div>

        <div 
          className={`hamburger ${styleHamburger}`}
          onClick={(e) => toggleHamburgerMenuActive(e)}
          onKeyDown={toggleHamburgerMenuActive}
          role="button"
          tabIndex="0"
        >
          <span />
          <span />
          <span />
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
              <button type="button" className="subheader_btn">заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderView.propTypes = { 
  styleHamburger: PropTypes.string, 
  styleMenu: PropTypes.string,
  toggleHamburgerMenuActive: PropTypes.func, 
};

HeaderView.defaultProps = { 
  styleHamburger: 'hamburger_active', 
  styleMenu: 'menu_active',
  toggleHamburgerMenuActive: null,
};

export default HeaderView;
