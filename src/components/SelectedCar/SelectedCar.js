import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import './selectedCar.sass';

function SelectedCar({ selectedCar }) {
  const { t } = useTranslation();
  const lng = localStorage.getItem('language');
  const [value, setValue] = useState(selectedCar);
  const [approved, setApproved] = useState(false);
  
  const changeValueBasedOnLng = () => {
    if (lng === 'ua') {
      setValue(`Ви обрали ${selectedCar}`);
    } else if (lng === 'ru') {
      setValue(`Вы выбрали ${selectedCar}`);
    }
  };

  const onApproveSelectedCar = () => {
    if (selectedCar === null) {
      alert(t('choiseCar.youNeedSelectAuto')); // eslint-disable-line
    } else if (selectedCar) {
      changeValueBasedOnLng();
      setApproved(true);
    }
  };

  useEffect(() => {
    setValue(selectedCar);
    setApproved(false);
  }, [selectedCar]);

  useEffect(() => {
    if (selectedCar && approved) {
      changeValueBasedOnLng();
    }
  }, [lng]);
  
  return (
    <div className="selected-car">
      <p className="selected-car_text">
        <strong>{t('choiseCar.selectedCar')}</strong>
        {' '}
        {value || t('choiseCar.choseCar')}
      </p>
      <button 
        name="confirm" 
        type="button" 
        className="btn"
        onClick={() => onApproveSelectedCar()}
      >
        {t('choiseCar.selectedCarApprove')}
      </button>
    </div>
  );
}

SelectedCar.propTypes = {
  selectedCar: PropTypes.string || null,
};

SelectedCar.defaultProps = {
  selectedCar: null,
};

export default SelectedCar;
