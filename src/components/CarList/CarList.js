import PropTypes from 'prop-types';
import CarItem from '../CarItem/CarItem';
import './carList.sass';

function CarList(props) {
  const {
    dragStartHadler, dragEndHandler, dragOverHandler,
    dropHandler, cardUntilCurrentCard, onActiveCard,
    onDelete, onChangeSelectedCar, setRef, filter, data,
  } = props;
  const carItemList = data.map((item, i) => {
    return (
      <CarItem
        key={item.id}
        data={item}
        onDelete={() => onDelete(item.id)}
        onChangeSelectedCar={() => onChangeSelectedCar(item.title)}
        dragStartHadler={dragStartHadler}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dropHandler={dropHandler}
        cardUntilCurrentCard={cardUntilCurrentCard}
        onActiveCard={(e) => onActiveCard(item.id, i, e)}
        setRef={setRef}
        filter={filter}
      />
    );
  });
  const elementWithoutInfoCar = (
    <h1>Информация отсутствует. Добавть, пожалуйста, новую карточку автомобиля!</h1>
  );
  return (
    <div
      className={`${data.length > 0 ? 'carList' : 'carList carList_without-cars'}`}
    >
      {data.length > 0 ? carItemList : elementWithoutInfoCar}
    </div>
  );
}

CarList.propTypes = { 
  dragStartHadler: PropTypes.func, 
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func, 
  dropHandler: PropTypes.func, 
  cardUntilCurrentCard: PropTypes.string,
  onActiveCard: PropTypes.func,
  onDelete: PropTypes.func,
  onChangeSelectedCar: PropTypes.func, 
  setRef: PropTypes.func, 
  filter: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

CarList.defaultProps = { 
  dragStartHadler: null, 
  dragEndHandler: null,
  dragOverHandler: null, 
  dropHandler: null, 
  cardUntilCurrentCard: null,
  onActiveCard: null,
  onDelete: null,
  onChangeSelectedCar: null, 
  setRef: null, 
  filter: 'all',
  data: null,
};

export default CarList;
