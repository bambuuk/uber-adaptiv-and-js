import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileView from './MobileView';
import PossibilityItem from '../PossibilityItem/PossibilityItem';

function Mobile() {
  const { t } = useTranslation();
  const [possibilitiesList] = useState([
    {
      numberItem: 1,
      subtitle: 'mobile.subtitle1',
      id: 'оформление заказа одним касанием',
    },
    {
      numberItem: 2,
      subtitle: 'mobile.subtitle2',
      id: 'надежная подача',
    },
    {
      numberItem: 3,
      subtitle: 'mobile.subtitle3',
      id: 'прозрачные цены',
    },
    {
      numberItem: 4,
      subtitle: 'mobile.subtitle4',
      id: 'безналичная оплата',
    },
    {
      numberItem: 5,
      subtitle: 'mobile.subtitle5',
      id: 'обратная связь',
    },
    {
      numberItem: 6,
      subtitle: 'mobile.subtitle6',
      id: 'разделить стоимость поездки',
    },
  ]);

  const content = possibilitiesList.map(({ numberItem, subtitle, id }) => {
    return (
      <PossibilityItem
        numberItem={numberItem}
        subtitle={t(subtitle)}
        key={id}
      />
    );
  });
  return (
    <MobileView content={content} />
  );
}

export default Mobile;
