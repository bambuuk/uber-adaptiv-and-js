import { useTranslation } from 'react-i18next';
import machine from '../../img/machine.png';

import './choise.sass';

function Choise() {
  const { t } = useTranslation();

  return (
    <section className="choise">
      <div className="container">
        <div className="choise_content">
          <div className="choise_content_label">{t('choise.choise_content_label')}</div>
          <h2 className="choise_content_title">{t('choise.choise_content_title')}</h2>
          <div className="choise_content_subtitle">
            {t('choise.choise_content_subtitle')}
          </div>
          <img src={machine} alt="machine" className="choise_content_car" />
          <div className="choise_content_text">
            {t('choise.choise_content_text1')}
            <br />
            {t('choise.choise_content_text2')}
          </div>
        </div>
      </div>
      <div className="substrate" />
    </section>
  );
}

export default Choise;
