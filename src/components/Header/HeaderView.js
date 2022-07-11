import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../../i18n/index';
import uberLogo from '../../img/logo/Uber.png';

function HeaderView(props) {
  const {
    styleHamburger, styleMenu, toggleHamburgerMenuActive, chooseTheme
  } = props;

  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   if (localStorage.getItem('lng')) {
  //     i18n.changeLanguage(localStorage.getItem('lng'));
  //   } else {
  //     i18n.changeLanguage('ua');
  //   }
  // }, []);

  const onChangeLanguage = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', `${lng}`);
  };

  return (
    <header>
      <nav>
        <div className="btn_switcher_theme">
          <button
            type="button"
            aria-label="Sun"
            className="btn-switcher"
            onClick={() => chooseTheme('light')}
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button
            type="button"
            aria-label="Moon"
            className="btn-switcher"
            onClick={() => chooseTheme('dark')}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
        <div className="chooseLanguage">
          <select name="language" onChange={onChangeLanguage}>
            <option value="ua">UA</option>
            <option value="ru">RU</option>
          </select>
        </div>
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
                {t('header.main')}
              </NavLink>
            </li>
            <li className="menu_item"><a href="#require" className="menu_link">{t('header.ownCar')}</a></li>
            <li className="menu_item"><a href="#require" className="menu_link">{t('header.companyCar')}</a></li>
            <li className="menu_item"><a href="#requirement" className="menu_link">{t('header.requirements')}</a></li>
            <li className="menu_item"><a href="#contacts" className="menu_link">{t('header.contacts')}</a></li>
            <li className="menu_item">
              <NavLink
                end
                style={({ isActive }) => ({ color: isActive ? '#fc7107' : '#fff' })}
                className="menu_link"
                href="#contacts"
                to="/choise-car"
              >
                {t('header.choiseCar')}
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
              <div id="main" className="subheader_official">{t('header.officialPartner')}</div>
            </div>

            <div className="xs-hidden col-6 col-md-3 offset-md-1 col-xl-2 offset-xl-2">
              <div id="contacts" className="subheader_call">{t('header.callUs')}</div>
              <a href="tel:84957970988" className="subheader_phone">+380992380623</a>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <a href="tel:84957970988" className="xs-visible subheader_phone">+380 495 797 09 88</a>
              <button type="button" className="subheader_btn">{t('header.requestCall')}</button>
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
  chooseTheme: PropTypes.func,
};

HeaderView.defaultProps = {
  styleHamburger: 'hamburger_active',
  styleMenu: 'menu_active',
  toggleHamburgerMenuActive: null,
  chooseTheme: null
};

export default HeaderView;
