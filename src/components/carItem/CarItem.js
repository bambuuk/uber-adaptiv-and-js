import { Component } from "react";

import './carItem.sass';

class CarItem extends Component {
    render() {
        const { title, typeItem, url, driver } = this.props.data;
        const {onChangeSelectedCar, dragStartHadler, dragEndHandler, dragOverHandler, dropHandler} = this.props;
        return (
            <div 
            className="card"
            onDragStart={(e) => dragStartHadler(e, this.props.data)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, this.props.data)}
            draggable={true}>
                <img src={url} className="card-img-top card_img" alt={title} draggable={false}/>
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