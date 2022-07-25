import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';
import appStore from '../../icons/store/apple-store.png';
import gplayStore from '../../icons/store/gplay-store.png';
import microsoftStore from '../../icons/store/microsoft-store.png';
import './footer.sass';

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <footer className={`footer footer_${theme}`}>
      <div className="container">
        <div className="footer_content">
          <div className="footer_content_line" />
          <div className="footer_content_link_header">
            <a href="#main" className={theme}>{t('footer.main')}</a>
            <a href="#main" className={theme}>{t('footer.towns')}</a>
            <a href="#main" className={theme}>{t('footer.forDrivers')}</a>
          </div>
          <div className="footer_content_link_subheader">
            <a href="#main" className={theme}>{t('footer.centerSupport')}</a>
            <a href="#main" className={theme}>{t('footer.vacancy')}</a>
            <a href="#main" className={theme}>{t('footer.developers')}</a>
            <a href="#main" className={theme}>{t('footer.blog')}</a>
            <a href="#main" className={theme}>{t('footer.aboutUs')}</a>
          </div>
          <div className="footer_content_link_subheader_min_screen_size">
            <div className="first">
              <a href="#main" className={theme}>{t('footer.centerSupport')}</a>
              <a href="#main" className={theme}>{t('footer.vacancy')}</a>
            </div>
            <div className="second">
              <a href="#main" className={theme}>{t('footer.developers')}</a>
              <a href="#main" className={theme}>{t('footer.blog')}</a>
              <a href="#main" className={theme}>{t('footer.aboutUs')}</a>
            </div>
          </div>
        </div>
        <div className="author">
          <div className="author_content">
            <div className={`author_title ${theme}`}>{t('footer.informationAboutAuthor')}</div>
            <div className={`author_name ${theme}`}>{t('footer.name')}</div>
            <a href="https://github.com/bambuuk" className={`author_link ${theme}`}>Github</a>
            <a
              href="https://www.figma.com/file/ivgb9OfADjPvRowi32CSgY/UBER_course?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
              className={`author_design_link ${theme}`}
            >
              {t('footer.original')}
            </a>
          </div>
        </div>
      </div>

      <div className="footer_networks">
        <a href="#main" aria-label="facebook" className="footer_networks_image"><i className="fab fa-facebook" /></a>
        <a href="#main" aria-label="twitter" className="footer_networks_image"><i className="fab fa-twitter" /></a>
        <a href="#main" aria-label="linkedin" className="footer_networks_image"><i className="fab fa-linkedin" /></a>
        <a href="#main" aria-label="instagram" className="footer_networks_image">
          <i className="fab fa-instagram" />
        </a>
      </div>
      <div className="footer_store">
        <a href="https://www.apple.com/ua/app-store/" target="_blank" rel="noreferrer">
          <img
            src={appStore}
            alt="apple store"
          />
        </a>
        <a href="https://play.google.com/" target="_blank" rel="noreferrer">
          <img
            src={gplayStore}
            alt="google play"
          />
        </a>
        <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer">
          <img
            src={microsoftStore}
            alt="microsoft store"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
