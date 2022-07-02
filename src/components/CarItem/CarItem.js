import PropTypes from 'prop-types';

import './carItem.sass';

function CarItem(props) {
  const {
    onChangeSelectedCar, dragStartHadler, dragEndHandler,
    dragOverHandler, dropHandler, cardUntilCurrentCard,
    onActiveCard, setRef, filter, onDelete, data
  } = props;

  const {
    title, typeItem, url, driver, id, active, focus
  } = data;

  const draggable = filter !== 'alphabet';
  let clazz = 'card';
  if (active) {
    clazz = 'card card_active';
  } else if (cardUntilCurrentCard === id) {
    clazz = 'card card_drag';
  } else if (focus && filter === 'all') {
    clazz = 'card card_focus';
  } else {
    clazz = 'card';
  }

  return (
    <div
      className={clazz}
      ref={(ref) => setRef(ref, id)}
      onDragStart={() => dragStartHadler(data)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e, id)}
      onDrop={(e) => dropHandler(e, data)}
      draggable={draggable}
      onClick={onActiveCard}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onActiveCard(id, e);
        }
      }}
      tabIndex="0"
      role="button"
    >
      <img
        src={url}
        className="card-img-top card_img"
        alt={title}
        draggable={false}
        onLoad={() => console.log('Картинка загрузилась!')} // eslint-disable-line
        onError={() => console.log('Произошла ошибка - Картинка не была загружена!')} // eslint-disable-line
      />
      <div className="card-body">
        <h5 className="card_title">{title}</h5>
        <p className="card_text">
          <strong>Тип автомобиля:</strong>
          {' '}
          {typeItem.typeCar}
          {' '}
          /
          {' '}
          <strong>Класс:</strong>
          {' '}
          {typeItem.classComfort}
        </p>
        <p className="card_text">
          <strong>Водитель:</strong>
          {' '}
          {driver}
        </p>
        <div className="btn_group">
          <button
            type="button"
            className="btn card_btn"
            onClick={onDelete}
            tabIndex="0"
          >
            Удалить
          </button>
          <button
            type="button"
            className=" btn card_btn"
            onClick={onChangeSelectedCar}
            tabIndex="0"
          >
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
}

CarItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string, 
    typeItem: PropTypes.shape({
      typeCar: PropTypes.string,
      classComfort: PropTypes.string,
    }), 
    url: PropTypes.string, 
    driver: PropTypes.string, 
    id: PropTypes.string,
    active: PropTypes.bool,
    focus: PropTypes.bool,
  }),
  onChangeSelectedCar: PropTypes.func,
  dragStartHadler: PropTypes.func,
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  cardUntilCurrentCard: PropTypes.string,
  onActiveCard: PropTypes.func,
  setRef: PropTypes.func,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};

CarItem.defaultProps = {
  data: null,
  onChangeSelectedCar: null,
  dragStartHadler: null,
  dragEndHandler: null,
  dragOverHandler: null,
  dropHandler: null,
  cardUntilCurrentCard: null,
  onActiveCard: null,
  setRef: null,
  filter: 'all',
  onDelete: null,
};

export default CarItem; 
