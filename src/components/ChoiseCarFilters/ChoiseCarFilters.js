import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ChoiseCarFiltersView from './ChoiseCarFiltersView';

function ChoiseCarFilters(props) {
  const { onChangeFilter, filter } = props;
  const { t } = useTranslation();

  const buttonsData = [
    { name: 'all', label: 'choiseCar.filterButtons.allLabel' },
    { name: 'sedan', label: 'choiseCar.filterButtons.sedanLabel' },
    { name: 'pickup', label: 'choiseCar.filterButtons.pickupLabel' },
    { name: 'universal', label: 'choiseCar.filterButtons.universalLabel' },
    { name: 'alphabet', label: 'choiseCar.filterButtons.alphabetLabel' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const clazz = filter === name ? 'choiseCar_btn choiseCar_btn_active' : 'choiseCar_btn';
    return (
      <button
        className={clazz}
        type="button"
        onClick={() => onChangeFilter(name)}
        key={name}
      >
        {t(label)}
      </button>
    );
  });

  return (
    <ChoiseCarFiltersView buttons={buttons} />
  );
}

ChoiseCarFilters.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

ChoiseCarFilters.defaultProps = {
  filter: 'all',
  onChangeFilter: () => null,
};

export default ChoiseCarFilters;
