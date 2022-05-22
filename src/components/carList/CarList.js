import { Component } from "react";

import CarItem from "../carItem/CarItem";
import './carList.sass';

class CarList extends Component {

    render() {
        const {dragStartHadler, dragEndHandler, dragOverHandler, dropHandler, sortCard} = this.props;
        const carItemList = this.props.data.sort(sortCard).map(item => {
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
                />
            )
        })
        const elementWithoutInfoCar = (
            <h1>Информация отсутствует. Добавть, пожалуйста, новую карточку автомобиля!</h1>
        )
        if (this.props.data.length > 0) {
            return (
                <div className="carList">
                    {carItemList}
                </div>
            )
        } else {
            return (
                <div className="carList carList_without-cars">
                    {elementWithoutInfoCar}
                </div>
            )
        }
    }
}

export default CarList;