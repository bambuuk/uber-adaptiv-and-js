import { useTranslation } from 'react-i18next';

import './promo.sass';

function Promo() {
  const { t } = useTranslation();

  return (
    <section className="promo">
      <div className="container">
        <div className="row">
          <div className="col-md-12 offset-md-0 col-lg-10 offset-lg-1">
            <h1 className="promo_header">{t('promo.promo_header')}</h1>
            <h2 className="promo_subheader">{t('promo.promo_subheader')}</h2>
            <div className="promo_descr">
              {t('promo.promo_descr')}
            </div>
            <button type="button" className="promo_btn">{t('promo.promo_btn')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
