import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TimeOfStayOnPage from '../TimeOfStayOnPage/TimeOfStayOnPage';
import './addCars.sass';

function AddCarsView(props) {
  const { t } = useTranslation();

  const {
    onValueInputChange, sendCarItem, myRef, onResetItem, data
  } = props;

  const {
    title, typeCar, classComfort, driver, url
  } = data;

  return (
    <section className="add-item-car">
      <form // eslint-disable-line
        className="add-item-car_form"
        onSubmit={sendCarItem}
        onReset={onResetItem}
        onKeyDown={(e) => {
          if (e.code === 'Escape') {
            onResetItem(e);
          }
        }}
        action=""
        method=""
        encType="multipart/form-data"
      >

        <input
          ref={myRef}
          className="add-item-car_input"
          onChange={(e) => onValueInputChange(e)}
          value={title}
          placeholder={t('choiseCar.modelCarInput')}
          required
          name="title"
          type="text"
        />

        <p className="selectTypeCar">
          <label htmlFor="type-car">
            {t('choiseCar.chooseCarInput')}
            <select
              id="type-car"
              className="form-select"
              aria-label="Default select example"
              name="typeCar"
              value={typeCar}
              onChange={(e) => onValueInputChange(e)}
            >
              <option>{t('choiseCar.availableVariablesOptionList')}</option>
              <option value="Седан">{t('choiseCar.sedanOptionList')}</option>
              <option value="Пикап">{t('choiseCar.pickupOptionList')}</option>
              <option value="Универсал">{t('choiseCar.universalOptionList')}</option>
            </select>
          </label>
        </p>

        <input
          className="add-item-car_input"
          onChange={(e) => onValueInputChange(e)}
          value={classComfort}
          placeholder={t('choiseCar.classCarInput')}
          required
          name="classComfort"
          type="text"
        />

        <input
          className="add-item-car_input"
          onChange={(e) => onValueInputChange(e)}
          value={driver}
          placeholder={t('choiseCar.driverInput')}
          required
          name="driver"
          type="text"
        />

        <input
          className="add-item-car_input url"
          onChange={(e) => onValueInputChange(e)}
          value={url}
          placeholder={t('choiseCar.linkOnPhotoInput')}
          required
          name="url"
          type="text"
        />

        <button
          className="add-item-car_btn"
          name="add"
          type="submit"
        >
          {t('choiseCar.addCarItemBtn')}
        </button>
        <button
          className="add-item-car_btn"
          name="reset"
          type="button"
          onClick={onResetItem}
        >
          {t('choiseCar.resetFormBtn')}
        </button>

        <TimeOfStayOnPage />
      </form>
    </section>
  );
}

AddCarsView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    typeCar: PropTypes.string,
    classComfort: PropTypes.string,
    driver: PropTypes.string,
    url: PropTypes.string,
  }),
  onValueInputChange: PropTypes.func,
  sendCarItem: PropTypes.func,
  myRef: PropTypes.shape({}),
  onResetItem: PropTypes.func,
};

AddCarsView.defaultProps = {
  data: null,
  onValueInputChange: null,
  sendCarItem: null,
  myRef: null,
  onResetItem: null,
};

export default AddCarsView;
