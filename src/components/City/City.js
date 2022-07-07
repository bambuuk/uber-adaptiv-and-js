import { useTranslation } from 'react-i18next';

import './city.sass';

function City() {
  const { t } = useTranslation();
  return (
    <section className="city">
      <div className="container">
        <div className="city_label">{t('city.city_label')}</div>
        <h2 className="city_title">{t('city.city_title')}</h2>
        <div className="city_subtitle">{t('city.city_subtitle')}</div>
      </div>
    </section>
  );
}

export default City;
