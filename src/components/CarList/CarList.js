import { Component } from "react";

import CarItem from "../CarItem/CarItem";
import './carList.sass';

class CarList extends Component {

    render() {
        const { dragStartHadler, dragEndHandler, dragOverHandler, 
            dropHandler, cardUntilCurrentCard, onActiveCard, 
            onDelete, onChangeSelectedCar } = this.props;
        const carItemList = this.props.data.map(item => {
            return (
                <CarItem
                    key={item.id}
                    data={item}
                    onDelete={() => onDelete(item.id)}
                    onChangeSelectedCar={() => onChangeSelectedCar(item.title)}
                    dragStartHadler={dragStartHadler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dropHandler={dropHandler}
                    cardUntilCurrentCard={cardUntilCurrentCard}
                    onActiveCard={() => onActiveCard(item.id)}
                />
            )
        })
        const elementWithoutInfoCar = (
            <h1>Информация отсутствует. Добавть, пожалуйста, новую карточку автомобиля!</h1>
        )
        return (
            <div className={`${this.props.data.length > 0 ? 'carList' : 'carList carList_without-cars'}`}>
                {this.props.data.length > 0 ? carItemList : elementWithoutInfoCar}
            </div>
        )
    }
}

export default CarList;