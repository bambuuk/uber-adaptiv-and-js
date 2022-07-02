import PropTypes from 'prop-types';
import './BestCompanyDrivers.sass';

function BestCompanyDriversView({ data }) {
  const listDrivers = data.map(({ name, imgUrl, id }) => {
    return (
      <div className="bestCompDrivers_item" key={id}>
        <img className="bestCompDrivers_img" src={imgUrl} alt={name} />
        <p className="bestCompDrivers_name">{name}</p>
      </div>
    );
  });

  return (
    <section className="bestCompDrivers">
      <div className="container">
        <div className="bestCompDrivers_list">
          {listDrivers}
        </div>
      </div>
    </section>
  );
}

BestCompanyDriversView.propTypes = {
  data: PropTypes.arrayOf(Object),
};

BestCompanyDriversView.defaultProps = {
  data: null,
};

export default BestCompanyDriversView;
