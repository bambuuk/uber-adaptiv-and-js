import { Component } from "react";

import './carItem.sass';

class CarItem extends Component {
    render() {
        const { title, typeItem, url, driver } = this.props.data;
        const {onChangeSelectedCar} = this.props;
        return (
            <div className="card" style={{ "width": "18rem" }}>
                <img src={url} className="card-img-top car_img" alt={title} style={{ "objectFit": "contain", "width": 400, "height": 200 }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><strong>Тип автомобиля:</strong> {typeItem.typeCar} / <strong>Класс:</strong> {typeItem.classComfort}</p>
                    <p className="card-text"><strong>Водитель:</strong> {driver}</p>
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