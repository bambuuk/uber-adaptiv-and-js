import PropTypes from 'prop-types';
import './choiseCarFilters.sass';

function ChoiseCarFiltersView({ buttons }) {
  return (
    <div className="choiseCar_filter">
      {buttons}
    </div>
  );
}

ChoiseCarFiltersView.propTypes = { 
  buttons: PropTypes.instanceOf(Array), 
};

ChoiseCarFiltersView.defaultProps = { 
  buttons: [null], 
};

export default ChoiseCarFiltersView;
