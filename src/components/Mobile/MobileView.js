import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';
import './mobile.sass';

function MobileView({ content }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`mobile mobile_${theme}`}>
      <div className="container">
        <div className={`label label_${theme}`}>{t('mobileView.label')}</div>
        <h2 className={`title title_${theme}`}>{t('mobileView.title')}</h2>
        <div className={`subtitle subtitle_${theme}`}>
          {t('mobileView.subtitle')}
        </div>
        <div className="row mobile_main_item">
          {content}
        </div>
      </div>
    </section>
  );
}

MobileView.propTypes = {
  content: PropTypes.arrayOf(Object),
};

MobileView.defaultProps = {
  content: null,
};

export default MobileView;
