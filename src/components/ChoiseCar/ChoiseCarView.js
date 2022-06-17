import PropTypes from 'prop-types';
import ChoiseCarFilters from '../ChoiseCarFilters/ChoiseCarFilters';
import CarList from '../CarList/CarList';
import AddCars from '../AddCars/AddCars';
import SelectedCar from '../SelectedCar/SelectedCar';
import BestCompanyDrivers from '../BestCompanyDrivers/BestCompanyDrivers';

import './choiseCar.sass';

function ChoiseCarView(props) {
  const {
    visibleCarItems, onChangeFilter,
    deleteItem, filter, onAddItem, selectedCar,
    onChangeSelectedCar, dragStartHadler,
    dragEndHandler, dragOverHandler, onActiveCard,
    dropHandler, cardUntilCurrentCard,
    setRef 
  } = props;
  return (
    <section className="choiseCar">
      <div className="container">
        <BestCompanyDrivers />
        <div className="title">Доступные варианты автомобилей</div>
        <ChoiseCarFilters
          onChangeFilter={onChangeFilter}
          filter={filter}
        />
        <SelectedCar selectedCar={selectedCar} />
        <CarList
          data={visibleCarItems}
          onDelete={deleteItem}
          filter={filter}
          onChangeSelectedCar={onChangeSelectedCar}
          dragStartHadler={dragStartHadler}
          dragEndHandler={dragEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          cardUntilCurrentCard={cardUntilCurrentCard}
          onActiveCard={onActiveCard}
          setRef={setRef}
        />
        <AddCars onAddItem={onAddItem} />
      </div>
    </section>
  );
}

ChoiseCarView.propTypes = { 
  visibleCarItems: PropTypes.instanceOf(Array),
  onChangeFilter: PropTypes.func,
  deleteItem: PropTypes.func,
  filter: PropTypes.string,
  onAddItem: PropTypes.func,
  selectedCar: PropTypes.string,
  onChangeSelectedCar: PropTypes.func, 
  dragStartHadler: PropTypes.func, 
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func, 
  dropHandler: PropTypes.func, 
  cardUntilCurrentCard: PropTypes.string,
  onActiveCard: PropTypes.func,    
  setRef: PropTypes.func, 
};

ChoiseCarView.defaultProps = { 
  visibleCarItems: [],
  onChangeFilter: () => null,
  deleteItem: () => null,
  filter: 'all',
  onAddItem: () => null,
  selectedCar: 'Вы пока не выбрали автомобиль',
  onChangeSelectedCar: () => null, 
  dragStartHadler: () => null, 
  dragEndHandler: () => null,
  dragOverHandler: () => null, 
  dropHandler: () => null, 
  cardUntilCurrentCard: '',
  onActiveCard: () => null,    
  setRef: () => null, 
};

export default ChoiseCarView;
