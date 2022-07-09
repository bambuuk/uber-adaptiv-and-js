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
      subtitle: 'reasons.subtitle0',
      id: 'Никаких наличных, оплата происходит автоматически',
      text: 'reasons.text0',
    },
    {
      imgSrc: icon2,
      subtitle: 'reasons.subtitle2',
      id: 'Комиссия 8% + БОНУСЫ',
      text: 'reasons.text2',
    },
    {
      imgSrc: icon1,
      subtitle: 'reasons.subtitle1',
      id: 'Высокий доход с гарантированными выплатами',
      text: 'reasons.text1',
    },
    {
      imgSrc: icon4,
      subtitle: 'reasons.subtitle4',
      id: 'Работа в удобное время, никаких графиков',
      text: 'reasons.text4',
    },
    {
      imgSrc: icon3,
      subtitle: 'reasons.subtitle3',
      id: 'Комфортное, прозрачное и простое подключение',
      text: 'reasons.text3',
    },
    {
      imgSrc: icon6,
      subtitle: 'reasons.subtitle6',
      id: 'Всегда большое количество заказов',
      text: 'reasons.text6',
    },
    {
      imgSrc: icon5,
      subtitle: 'reasons.subtitle5',
      id: 'Круглосуточная поддержка',
      text: 'reasons.text5',
    },
    {
      imgSrc: icon7,
      subtitle: 'reasons.subtitle7',
      id: 'Без шашечек и наклеек',
      text: 'reasons.text7',
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
        subtitle={t(subtitle)} 
        text={t(text)}
      />
    );
  });

  return (
    <ReasonsView content={content} />
  );
}

export default Reasons;
