import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './reasons.sass';

function ReasonsView({ content }) {
  const { t } = useTranslation();
  return (
    <section className="reasons">
      <div className="container">
        <div className="label">{t('reasonsView.label')}</div>
        <h2 className="title">{t('reasonsView.title')}</h2>
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
