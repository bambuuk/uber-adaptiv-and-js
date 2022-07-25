import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

import './reasons.sass';

function ReasonsView({ content }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section className={`reasons ${theme}`}>
      <div className="container">
        <div className={`label label_${theme}`}>{t('reasonsView.label')}</div>
        <h2 className={`title title_${theme}`}>{t('reasonsView.title')}</h2>
        <div className="row">
          {content}
        </div>
      </div>
    </section>
  );
}

ReasonsView.propTypes = {
  content: PropTypes.arrayOf(Object),
};

ReasonsView.defaultProps = {
  content: null,
};

export default ReasonsView;
