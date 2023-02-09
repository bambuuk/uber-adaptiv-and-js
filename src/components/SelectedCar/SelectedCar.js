import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './selectedCar.sass';

function SelectedCar({ selectedCar }) {
  const { t } = useTranslation();
  return (
    <div className="selected-car">
      <p className="selected-car_text">
        <strong>{t('choiseCar.selectedCar')}</strong>
        {' '}
        {selectedCar || t('choiseCar.choseCar')}
      </p>
      <button name="confirm" type="button" className="btn">{t('choiseCar.selectedCarApprove')}</button>
    </div>
  );
}

SelectedCar.propTypes = {
  selectedCar: PropTypes.string || null
};

SelectedCar.defaultProps = {
  selectedCar: 'Вы пока не выбрали автомобиль'
};

export default SelectedCar;
