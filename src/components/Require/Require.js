import { useTranslation } from 'react-i18next';

import './require.sass';

function Require() {
  const { t } = useTranslation();

  return (
    <section className="require" id="require">
      <div className="container">
        <div className="label">{t('require.label')}</div>
        <h2 className="title">{t('require.title')}</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="require_block">
              <div className="require_title">
                {t('require.require_title1')}
              </div>
              <ul className="require_list">
                <li>{t('require.require_list1.item1')}</li>
                <li>{t('require.require_list1.item2')}</li>
                <li>{t('require.require_list1.item3')}</li>
                <li>{t('require.require_list1.item4')}</li>
                <li>{t('require.require_list1.item5')}</li>
                <li>{t('require.require_list1.item6')}</li>
                <li>{t('require.require_list1.item7')}</li>
              </ul>
              <div className="require_description">
                {t('require.equire_description1')}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="require_block">
              <div className="require_title">
                {t('require.require_title2')}
              </div>
              <ul className="require_list">
                <li>{t('require.require_list2.item1')}</li>
                <li>{t('require.require_list2.item2')}</li>
                <li>{t('require.require_list2.item3')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="require_block require_block_nmb warning">
              <div className="require_title" id="requirement">
                {t('require.require_title3')}
              </div>
              <ul className="require_list">
                <li>{t('require.require_list3.item1')}</li>
                <li>{t('require.require_list3.item2')}</li>
                <li>{t('require.require_list3.item3')}</li>
                <li>{t('require.require_list3.item4')}</li>
                <li>{t('require.require_list3.item5')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="require_block require_block_nmb warning">
              <div className="require_title">
                {t('require.require_title4')}
              </div>
              <ul className="require_list">
                <li>{t('require.require_list4.item1')}</li>
                <li>{t('require.require_list4.item2')}</li>
                <li>{t('require.require_list4.item3')}</li>
                <li>{t('require.require_list4.item4')}</li>
                <li>{t('require.require_list4.item5')}</li>
                <li>{t('require.require_list4.item6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Require;
