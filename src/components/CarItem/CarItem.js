import { Component } from "react";
import PropTypes from 'prop-types';

import './carItem.sass';

class CarItem extends Component {
    render() {
        const { title, typeItem, url, driver, id, active, focus } = this.props.data;
        const { onChangeSelectedCar, dragStartHadler, dragEndHandler,
            dragOverHandler, dropHandler, cardUntilCurrentCard,
            onActiveCard, setRef, filter, onDelete } = this.props;
        const draggable = filter === 'alphabet' ? false : true;
        let clazz = 'card';
        if (active === true) {
            clazz = 'card card_active';
        } else if (cardUntilCurrentCard === id) {
            clazz = 'card card_drag';
        } else if (active === true && cardUntilCurrentCard === id) {
            clazz = 'card card_drag card_active';
        } else if (focus === true && filter === 'all') {
            clazz = 'card card_focus';
        } else if (focus === true && active === true && filter === 'all') {
            clazz = 'card card_active card_focus';
        } else {
            clazz = 'card';
        }

        return (

            <div
                className={clazz}
                ref={ref => setRef(ref, id)}
                onDragStart={(e) => dragStartHadler(e, this.props.data)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e, id)}
                onDrop={(e) => dropHandler(e, this.props.data)}
                draggable={draggable}
                onClick={onActiveCard}
                onKeyUp={e => {
                    if (e.key === 'Enter') {
                        onActiveCard(id, e);
                    }
                }}
                tabIndex="0">
                <img
                    src={url}
                    className="card-img-top card_img"
                    alt={title}
                    draggable={false}
                    onLoad={() => console.log('Картинка загрузилась!')}
                    onError={() => console.log('Произошла ошибка - Картинка не была загружена!')}
                />
                <div className="card-body">
                    <h5 className="card_title">{title}</h5>
                    <p className="card_text"><strong>Тип автомобиля:</strong> {typeItem.typeCar} / <strong>Класс:</strong> {typeItem.classComfort}</p>
                    <p className="card_text"><strong>Водитель:</strong> {driver}</p>
                    <div className="btn_group">
                        <button
                            type="button"
                            className="btn card_btn"
                            onClick={onDelete}
                            tabIndex="0">Удалить</button>
                        <button
                            type="button"
                            className=" btn card_btn"
                            onClick={onChangeSelectedCar}
                            tabIndex="0">Выбрать</button>
                    </div>
                </div>
            </div>
        )
    }
}

CarItem.propTypes = {
    data: PropTypes.object,
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
}

export default CarItem; 