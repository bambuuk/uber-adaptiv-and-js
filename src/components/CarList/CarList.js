import { Component } from "react";

import CarItem from "../CarItem/CarItem";
import './carList.sass';

class CarList extends Component {

    render() {
        const { dragStartHadler, dragEndHandler, dragOverHandler, 
            dropHandler, cardUntilCurrentCard } = this.props;
        const carItemList = this.props.data.map(item => {
            return (
                <CarItem
                    key={item.id}
                    data={item}
                    onDelete={() => this.props.onDelete(item.id)}
                    onChangeSelectedCar={() => this.props.onChangeSelectedCar(item.title)}
                    dragStartHadler={dragStartHadler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dropHandler={dropHandler}
                    cardUntilCurrentCard={cardUntilCurrentCard}
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