import PropTypes from 'prop-types';
import './choiseCarFilters.sass';


function ChoiseCarFiltersView({ buttons }) {
    return (
        <>
            <div className="choiseCar_filter">
                {buttons}
            </div>
        </>
    )
}

ChoiseCarFiltersView.propTypes = { 
    buttons: PropTypes.array, 
}

export default ChoiseCarFiltersView;