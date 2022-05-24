import { Component } from "react";

import './carItem.sass';

class CarItem extends Component {
    render() {
        const { title, typeItem, url, driver, id } = this.props.data;
        const {onChangeSelectedCar, dragStartHadler, dragEndHandler, 
            dragOverHandler, dropHandler, cardUntilCurrentCard} = this.props;
        let clazz = cardUntilCurrentCard === id ? 'card card_drag' : 'card';
        return (
            
            <div 
                className={clazz}
                onDragStart={(e) => dragStartHadler(e, this.props.data)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e, id)}
                onDrop={(e) => dropHandler(e, this.props.data)}
                draggable={true}>
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
                            className="btn"
                            onClick={this.props.onDelete}
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

export default CarItem; 