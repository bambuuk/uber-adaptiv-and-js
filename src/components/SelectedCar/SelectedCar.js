import PropTypes from 'prop-types';

import './selectedCar.sass';

function SelectedCar({ selectedCar }) {
  return (
    <div className="selected-car">
      <p className="selected-car_text">
        <strong>Выбранный автомобиль:</strong> 
        {' '}
        {selectedCar}
      </p>
      <button name="confirm" type="button" className="btn">Подтвердить</button>
    </div>
  );
}

SelectedCar.propTypes = {
  selectedCar: PropTypes.string
};

SelectedCar.defaultProps = {
  selectedCar: 'Вы пока не выбрали автомобиль'
};

export default SelectedCar;
