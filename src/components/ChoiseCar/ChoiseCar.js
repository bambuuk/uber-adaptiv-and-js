import { 
  useState, useEffect, useContext, useCallback 
} from 'react';
import ChoiseCarView from './ChoiseCarView';
import ThemeContext from '../../context/ThemeContext';

import sedan from '../../img/cars/sedan.png';
import pickup from '../../img/cars/pickup.png';
import universal from '../../img/cars/universal.png';

const filterType = {
  sedan: 'Седан',
  pickup: 'Пикап',
  universal: 'Универсал',
};

function ChoiseCar() {
  const [filter, setFilter] = useState('all');
  const [selectedCar, setSelectedCar] = useState('Вы пока не выбрали автомобиль');
  const [currentCard, setCurrentCard] = useState(null);
  const [cardUntilCurrentCard, setCardUntilCurrentCard] = useState(null);
  const [onFocusWithArrow, setOnFocusWithArrow] = useState(false);
  const [countClickArrow, setCountClickArrow] = useState(null);
  const [cardsList, setCardsList] = useState([
    {
      order: 1,
      title: 'BMW M3',
      typeItem: { typeCar: 'Седан', classComfort: 'Средний' },
      driver: 'Двэйн Джонсон',
      url: sedan,
      id: 'BMW M3 Двэйн Джонсон',
      active: false,
      focus: false
    },

    {
      order: 2,
      title: 'TOYOTA GT86',
      typeItem: { typeCar: 'Седан', classComfort: 'Люкс' },
      driver: 'Джейк Джилленгол',
      url: sedan,
      id: 'TOYOTA GT86 Джейк Джилленгол',
      active: false,
      focus: false
    },

    {
      order: 3,
      title: 'Nissan GTR',
      typeItem: { typeCar: 'Седан', classComfort: 'Люкс' },
      driver: 'Том Холанд',
      url: sedan,
      id: 'Nissan GTR Том Холанд',
      active: false,
      focus: false
    },

    {
      order: 4,
      title: 'Ford F-150',
      typeItem: { typeCar: 'Пикап', classComfort: 'Люкс' },
      driver: 'Александра Даддарио',
      url: pickup,
      id: 'Ford F-150 Александра Даддарио',
      active: false,
      focus: false
    },

    {
      order: 5,
      title: 'TOYOTA Tundra',
      typeItem: { typeCar: 'Пикап', classComfort: 'Люкс' },
      driver: 'Зэндая Мари',
      url: pickup,
      id: 'TOYOTA Tundra Зэндая Мари',
      active: false,
      focus: false
    },

    {
      order: 6,
      title: 'Москвич Пирожок',
      typeItem: { typeCar: 'Пикап', classComfort: 'Эконом' },
      driver: 'Кристиан Бейл',
      url: pickup,
      id: 'Москвич Пирожок Кристиан Бейл',
      active: false,
      focus: false
    },

    {
      order: 7,
      title: 'Volkswagen Golf',
      typeItem: { typeCar: 'Универсал', classComfort: 'Средний' },
      driver: 'Том Хэнкс',
      url: universal,
      id: 'Volkswagen Golf Том Хэнкс',
      active: false,
      focus: false
    },
  ]);

  const itemRefs = {}; // eslint-disable-line
  
  const onActiveCard = (id) => {
    setCardsList(cardsList.map((item) => (item.id === id ? { ...item, active: !item.active } : item)));
    if (typeof (id) === 'string') {
      itemRefs[id].focus();
    } else {
      itemRefs[id.id].focus();
    }
  };

  const onKeyboardClickForFocusCards = useCallback((e) => {
    // console.log('used')
    const c = e.code;

    if (onFocusWithArrow === false && c !== 'Escape') {
      setOnFocusWithArrow(true);
    } else if (c === 'Escape') {
      setCardsList(() => {
        return cardsList.map((item) => {
          return { ...item, focus: false };
        });
      });
      setOnFocusWithArrow(false);
      setCountClickArrow(null);
    }
    if (filter !== 'all' && (c === 'ArrowRight' || c === 'ArrowLeft')) {
      alert('На этом фильтре нет возможности передвигаться по карточкам с помощью стрелок клавиатуры!'); // eslint-disable-line
    } else if (c === 'ArrowRight') {
      if (countClickArrow !== null && countClickArrow < cardsList.length - 1) {
        setCountClickArrow(countClickArrow + 1);
        setCardsList((prevCardList) => prevCardList.map((item, i) => (
          { ...item, focus: i === countClickArrow + 1 }
        )));
      } else if (countClickArrow !== null && countClickArrow === cardsList.length - 1) {
        setCountClickArrow(0);
        setCardsList((prevCardList) => prevCardList.map((item, i) => (
          { ...item, focus: i === 0 }
        )));
      } else if (countClickArrow === null) {
        setCountClickArrow(0);
        setCardsList((prevCardList) => prevCardList.map((item, i) => (
          { ...item, focus: i === 0 }
        )));
      }
    } else if (c === 'ArrowLeft') {
      if (countClickArrow !== null && countClickArrow > 0) {
        setCountClickArrow(countClickArrow - 1);
        setCardsList(cardsList.map((item, i) => (
          { ...item, focus: i === countClickArrow - 1 }
        )));
      } else if (countClickArrow !== null && countClickArrow === 0) {
        setCountClickArrow(cardsList.length - 1);
        setCardsList(cardsList.map((item, i) => (
          { ...item, focus: i === countClickArrow - 1 }
        )));
      } else if (countClickArrow === null) {
        setCountClickArrow(0);
        setCardsList(cardsList.map((item, i) => (
          { ...item, focus: i === 0 }
        )));
      }
    } else if (e.code === 'ControlRight') {
      const id = cardsList[countClickArrow];
      onActiveCard(id);
    }
  }, [onFocusWithArrow, countClickArrow, cardsList]);

  const deleteItem = (id) => {
    setCardsList((prevCardsList) => prevCardsList.filter((item) => item.id !== id));
    // console.log(cardsList.filter((item) => item.id !== id));
  };

  // filter change function
  const onChangeFilter = (filterTypeCar) => {
    setFilter(filterTypeCar);
    if (filterTypeCar === 'alphabet') {
      alert('При использовании данного фильтра, функция перетаскивания карточек не работает!'); // eslint-disable-line
    }
  };

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  // Sort cars function. There are sort method and sorting methods in this function
  const onSortCarItems = (filters, data) => {
    if (filterType[filters]) {
      return data.filter((item) => item.typeItem.typeCar === filterType[filters]);
    } 
    if (filters === 'alphabet') {
      const copyData = [...data];
      const res = copyData.sort((item1, item2) => (item1.title > item2.title ? 1 : -1));
      return res;
    }
    return data;
  };

  // Add cars function. There is spred operator in this function
  const onAddItem = (title, typeCar, classComfort, driver, url) => {
    const carItem = [
      {
        order: cardsList.length + 1,
        title,
        typeItem: { typeCar, classComfort },
        driver,
        url,
        id: `${title} ${driver}`,
        active: false,
        focus: false
      }
    ];

    setCardsList([
      ...cardsList,
      ...carItem
    ]);
  };

  const onChangeSelectedCar = (title) => {
    setSelectedCar(title);
  };

  const setRef = (ref, id) => {
    if (ref !== null && ref !== undefined) {
      itemRefs[id] = ref;
    }
  };

  // ***************************************
  // downstairs functions for drag and drop functionally
  // ***************************************

  const dragStartHadler = (card) => {
    setCurrentCard(card);
    /* send selected cards in state */
  };

  const dragEndHandler = () => {
    setCardUntilCurrentCard(null);
  };

  const dragOverHandler = (e, id) => {
    e.preventDefault();
    if (cardUntilCurrentCard !== id) {
      setCardUntilCurrentCard(id);
    }
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    setCardUntilCurrentCard(null);

    setCardsList(cardsList.map((c) => {
      if (c.id === card.id) {
        return { ...c, order: currentCard.order };
      }
      if (c.id === currentCard.id) {
        return { ...c, order: card.order };
      }
      return c;
    }).sort(sortCard));
    setCurrentCard(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyboardClickForFocusCards);
    return () => {
      document.removeEventListener('keydown', onKeyboardClickForFocusCards);
    };
  }, [onKeyboardClickForFocusCards]);

  const visibleCarItems = onSortCarItems(filter, cardsList);
  const { theme } = useContext(ThemeContext);

  return (
    <ChoiseCarView
      visibleCarItems={visibleCarItems}
      onChangeFilter={onChangeFilter}
      deleteItem={deleteItem}
      onAddItem={onAddItem}
      filter={filter}
      selectedCar={selectedCar}
      onChangeSelectedCar={onChangeSelectedCar}
      dragStartHadler={dragStartHadler}
      dragEndHandler={dragEndHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      sortCard={sortCard}
      cardUntilCurrentCard={cardUntilCurrentCard}
      onActiveCard={onActiveCard}
      setRef={setRef}
      theme={theme}
    />
  );
}

export default ChoiseCar;
