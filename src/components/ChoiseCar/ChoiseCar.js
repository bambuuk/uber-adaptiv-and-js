import React, { Component } from 'react';

import ChoiseCarView from './ChoiseCarView';

import sedan from '../../img/cars/sedan.png';
import pickup from '../../img/cars/pickup.png';
import universal from '../../img/cars/universal.png';

const filterType = {
  sedan: 'Седан',
  pickup: 'Пикап',
  universal: 'Универсал',
};

class ChoiseCar extends Component {
  constructor() {
    super();
    this.state = {
      data: [
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
      ],
      filter: 'all',
      selectedCar: 'Вы пока не выбрали автомобиль',
      currentCard: null,
      cardUntilCurrentCard: null,
      onFocusWithArrow: false,
      countClickArrow: null
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyboardClickForFocusCards);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyboardClickForFocusCards);
  }

  onKeyboardClickForFocusCards = (e) => {
    const c = e.code;
    const { 
      onFocusWithArrow, filter,
    } = this.state;

    if (onFocusWithArrow === false && c !== 'Escape') {
      this.setState({ onFocusWithArrow: true });
    } else if (c === 'Escape') {
      this.setState(({ data }) => {
        const copyData = [...data];
        const onFocusCard = copyData.map((item) => {
          return { ...item, focus: false };
        });
        return { data: onFocusCard, onFocusWithArrow: false, countClickArrow: null };
      });
    }
    if (filter !== 'all' && (c === 'ArrowRight' || c === 'ArrowLeft')) {
      alert('На этом фильтре нет возможности передвигаться по карточкам с помощью стрелок клавиатуры!'); // eslint-disable-line
    } else if (c === 'ArrowRight') {
      this.setState(({ countClickArrow, data }) => {
        const count = countClickArrow;
        if (count !== null && count < data.length - 1) {
          return { countClickArrow: count + 1 };
        } if (count !== null && count === data.length - 1) {
          return { countClickArrow: 0 };
        } if (count === null) {
          return { countClickArrow: 0 };
        } 
        return { countClickArrow };
      });
      this.setState(({ data, countClickArrow }) => {
        const copyData = [...data];
        const onFocusCard = copyData.map((item, i) => (
          { ...item, focus: i === countClickArrow }
        ));

        return { data: onFocusCard };
      });
    } else if (c === 'ArrowLeft') {
      this.setState(({ countClickArrow, data }) => {
        const count = countClickArrow;
        if (count !== null && count > 0) {
          return { countClickArrow: count - 1 };
        } if (count !== null && count === 0) {
          return { countClickArrow: data.length - 1 };
        } if (count === null) {
          return { countClickArrow: 0 };
        } 
        return { countClickArrow };
      });

      this.setState(({ data, countClickArrow }) => {
        const copyData = [...data];
        const onFocusCard = copyData.map((item, i) => (
          { ...item, focus: i === countClickArrow }
        ));

        return { data: onFocusCard };
      });
    } else if (e.code === 'ControlRight') {
      const { data, countClickArrow } = this.state;
      const id = data[countClickArrow];
      this.onActiveCard(id, countClickArrow);
    }
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }));
  };

  // filter change function
  onChangeFilter = (filterTypeCar) => {
    this.setState({ filter: filterTypeCar });
    if (filterTypeCar === 'alphabet') {
      alert('При использовании данного фильтра, функция перетаскивания карточек не работает!'); // eslint-disable-line
    }
  };

  sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } 
    return -1;
  };

  // Sort cars function. There are sort method and sorting methods in this function
  onSortCarItems = (filter, data) => {
    if (filterType[filter]) {
      return data.filter((item) => item.typeItem.typeCar === filterType[filter]);
    } if (filter === 'alphabet') {
      const res = data.sort((item1, item2) => (item1.title > item2.title ? 1 : -1));
      return res;
    } 
    return data;
  };

  // Add cars function. There is spred operator in this function
  onAddItem = (title, typeCar, classComfort, driver, url) => {
    const { data } = this.state;
    const carItem = [
      {
        order: data.length + 1,
        title,
        typeItem: { typeCar, classComfort },
        driver,
        url,
        id: `${title} ${driver}`,
        active: false,
        focus: false
      }
    ];
    this.setState(() => ({
      data: [...data, ...carItem]
    }));
  };

  onChangeSelectedCar = (title) => {
    this.setState({ selectedCar: title });
  };

  itemRefs = {}; // eslint-disable-line

  setRef = (ref, id) => {
    if (ref !== null && ref !== undefined) {
      this.itemRefs[id] = ref;
    }
  };

  onActiveCard = (id) => {
    this.setState((state) => {
      const copyData = [...state.data];
      const activeItemInArr = copyData.map((item) => (item.id === id ? { ...item, active: !item.active } : item));
      return { data: activeItemInArr };
    });
    if (typeof (id) === 'string') {
      this.itemRefs[id].focus();
    } else {
      this.itemRefs[id.id].focus();
    }
  };

  // ***************************************
  // downstairs functions for drag and drop functionally
  // ***************************************

  dragStartHadler = (e, card) => {
    this.setState({ currentCard: card });
    /* send selected cards in state */
  };

  dragEndHandler = () => {
    this.setState({ cardUntilCurrentCard: null });
  };

  dragOverHandler = (e, id) => {
    e.preventDefault();
    const { cardUntilCurrentCard } = this.state;
    if (cardUntilCurrentCard !== id) {
      this.setState({ cardUntilCurrentCard: id });
    }
  };

  dropHandler = (e, card) => {
    e.preventDefault();
    this.setState({ cardUntilCurrentCard: null });
    this.setState((state) => {
      const copyData = [...state.data];
      // const copyData = [...state.data];
      // console.log(copyData)
      /**
       * когда фильтрую массив данных, нужно заново переписать order уже в отсортированном массиве, после чего 
       * передавать правильные данные дальше и скорее всего, ордер переписывать нужно в onSortCarItems
     */
      const newData = copyData.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: state.currentCard.order };
        }
        if (c.id === state.currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      });
      return { data: newData.sort(this.sortCard) };
    });
    this.setState({ currentCard: null });
  };

  render() {
    const { 
      filter, data, selectedCar, cardUntilCurrentCard
    } = this.state;
    const { onSortCarItems } = this;
    const visibleCarItems = onSortCarItems(filter, data);

    return (
      <ChoiseCarView
        visibleCarItems={visibleCarItems}
        onChangeFilter={this.onChangeFilter}
        deleteItem={this.deleteItem}
        onAddItem={this.onAddItem}
        filter={filter}
        selectedCar={selectedCar}
        onChangeSelectedCar={this.onChangeSelectedCar}
        dragStartHadler={this.dragStartHadler}
        dragEndHandler={this.dragEndHandler}
        dragOverHandler={this.dragOverHandler}
        dropHandler={this.dropHandler}
        sortCard={this.sortCard}
        cardUntilCurrentCard={cardUntilCurrentCard}
        onActiveCard={this.onActiveCard}
        setRef={this.setRef}
      />
    );
  }
}

export default ChoiseCar;
