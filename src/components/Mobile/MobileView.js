import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './mobile.sass';

function MobileView({ content }) {
  const { t } = useTranslation();
  return (
    <section className="mobile">
      <div className="container">
        <div className="label">{t('mobileView.label')}</div>
        <h2 className="title">{t('mobileView.title')}</h2>
        <div className="subtitle">
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
