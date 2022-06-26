import PropTypes from 'prop-types';
import ChoiseCarFiltersView from './ChoiseCarFiltersView';

function ChoiseCarFilters(props) {
  const { onChangeFilter, filter } = props;

  const buttonsData = [
    { name: 'all', label: 'Все машины' },
    { name: 'sedan', label: 'Седаны' },
    { name: 'pickup', label: 'Пикапы' },
    { name: 'universal', label: 'Универсалы' },
    { name: 'alphabet', label: 'Сортировка машин за алфавитом' },
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
        {label}
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
