import PropTypes from 'prop-types';
import './BestCompanyDrivers.sass';

function BestCompanyDriversView({ listDrivers }) {
  return (
    <section className="bestCompDrivers">
      <div className="container">
        <div className="title">Лучшие водители нашей компании</div>
        <div className="bestCompDrivers_list">
          {listDrivers}
        </div>
      </div>
    </section>
  );
}

BestCompanyDriversView.propTypes = {
  listDrivers: PropTypes.instanceOf(Array),
};

BestCompanyDriversView.defaultProps = {
  listDrivers: null,
};

export default BestCompanyDriversView;
