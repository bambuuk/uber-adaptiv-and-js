import PropTypes from 'prop-types';
import './mobile.sass';

function PossibilityItem({ numberItem, subtitle }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className={`mobile_item mobile_item_${numberItem}`}>
        <div className="mobile_item_subtitle">{subtitle}</div>
        <div className="mobile_item_plus" />
      </div>
    </div>
  );
}

PossibilityItem.propTypes = {
  numberItem: PropTypes.number,
  subtitle: PropTypes.string,
};

PossibilityItem.defaultProps = {
  numberItem: null,
  subtitle: null,
};

export default PossibilityItem;
