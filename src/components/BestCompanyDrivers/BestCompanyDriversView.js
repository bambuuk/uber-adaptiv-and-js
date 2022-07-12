import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Spinner from '../Spinner/Spinner';
import './BestCompanyDrivers.sass';

function BestCompanyDriversView({ data, onRequest, loading }) {
  const { t } = useTranslation();

  const listDrivers = data.map(({ name, imgUrl, id }) => {
    return (
      <div className="bestCompDrivers_item" key={id}>
        <img className="bestCompDrivers_img" src={imgUrl} alt={name} />
        <p className="bestCompDrivers_name">{name}</p>
      </div>
    );
  });

  const spinnerShow = loading ? <Spinner /> : t('updateDriversListBtn');

  return (
    <section className="bestCompDrivers">
      <div className="container">
        <div className="bestCompDrivers_list">
          {listDrivers}
        </div>
        <button 
          name="update" 
          type="button" 
          className="btn btn_position_center"
          onClick={() => onRequest('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers')}
        >
          {spinnerShow}
        </button>
      </div>
    </section>
  );
}

BestCompanyDriversView.propTypes = {
  data: PropTypes.arrayOf(Object),
  onRequest: PropTypes.func,
  loading: PropTypes.bool
};

BestCompanyDriversView.defaultProps = {
  data: null,
  onRequest: null,
  loading: null
};

export default BestCompanyDriversView;
