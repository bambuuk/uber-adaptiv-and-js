import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReasonsItem from '../ReasonsItem/ReasonsItem';
import ReasonsView from './ReasonsView';

import icon0 from '../../icons/icon-0.png';
import icon1 from '../../icons/icon-1.png';
import icon2 from '../../icons/icon-2.png';
import icon4 from '../../icons/icon-4.png';
import icon3 from '../../icons/icon-3.png';
import icon6 from '../../icons/icon-6.png';
import icon5 from '../../icons/icon-5.png';
import icon7 from '../../icons/icon-7.png';

function Reasons() {
  const { t } = useTranslation();

  const [reasonsList] = useState([
    {
      imgSrc: icon0,
      subtitle: t('reasons.subtitle0'),
      id: 'Никаких наличных, оплата происходит автоматически',
      text: t('reasons.text0'),
    },
    {
      imgSrc: icon2,
      subtitle: t('reasons.subtitle2'),
      id: 'Комиссия 8% + БОНУСЫ',
      text: t('reasons.text2'),
    },
    {
      imgSrc: icon1,
      subtitle: t('reasons.subtitle1'),
      id: 'Высокий доход с гарантированными выплатами',
      text: t('reasons.text1'),
    },
    {
      imgSrc: icon4,
      subtitle: t('reasons.subtitle4'),
      id: 'Работа в удобное время, никаких графиков',
      text: t('reasons.text4'),
    },
    {
      imgSrc: icon3,
      subtitle: t('reasons.subtitle3'),
      id: 'Комфортное, прозрачное и простое подключение',
      text: t('reasons.text3'),
    },
    {
      imgSrc: icon6,
      subtitle: t('reasons.subtitle6'),
      id: 'Всегда большое количество заказов',
      text: t('reasons.text6'),
    },
    {
      imgSrc: icon5,
      subtitle: t('reasons.subtitle5'),
      id: 'Круглосуточная поддержка',
      text: t('reasons.text5'),
    },
    {
      imgSrc: icon7,
      subtitle: t('reasons.subtitle7'),
      id: 'Без шашечек и наклеек',
      text: t('reasons.text7'),
    },
  ]);

  // const reasonsListObj = t("reasons", { returnObjects: true });

  const content = reasonsList.map(({
    imgSrc, subtitle, id, text 
  }) => {
    return (
      <ReasonsItem
        key={id}
        imgSrc={imgSrc}
        subtitle={subtitle}
        text={text}
      />
    );
  });

  return (
    <ReasonsView content={content} />
  );
}

export default Reasons;
