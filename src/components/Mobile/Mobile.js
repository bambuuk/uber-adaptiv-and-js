import { useState } from 'react';
import MobileView from './MobileView';
import PossibilityItem from '../PossibilityItem/PossibilityItem';

function Mobile() {
  const [possibilitiesList] = useState([
    {
      numberItem: 1,
      subtitle: 'оформление заказа одним касанием',
      id: 'оформление заказа одним касанием',
    },
    {
      numberItem: 2,
      subtitle: 'надежная подача',
      id: 'надежная подача',
    },
    {
      numberItem: 3,
      subtitle: 'прозрачные цены',
      id: 'прозрачные цены',
    },
    {
      numberItem: 4,
      subtitle: 'безналичная оплата',
      id: 'безналичная оплата',
    },
    {
      numberItem: 5,
      subtitle: 'обратная связь',
      id: 'обратная связь',
    },
    {
      numberItem: 6,
      subtitle: 'разделить стоимость поездки',
      id: 'разделить стоимость поездки',
    },
  ]);

  const content = possibilitiesList.map(({ numberItem, subtitle, id }) => {
    return (
      <PossibilityItem
        numberItem={numberItem}
        subtitle={subtitle}
        key={id}
      />
    );
  });
  return (
    <MobileView content={content} />
  );
}

export default Mobile;
