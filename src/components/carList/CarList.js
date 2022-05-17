import { Component } from "react";

import CarItem from "../carItem/CarItem";
import './carList.sass';

class CarList extends Component {

    render() {
        const carItemList = this.props.data.map(item => {
            const { id, ...itemProps } = item;
            return (
                <CarItem
                    key={id}
                    data={itemProps}
                    onDelete={() => this.props.onDelete(id)}
                    onChangeSelectedCar={() => this.props.onChangeSelectedCar(itemProps.title)}

                />
            )
        })
        const elementWithoutInfoCar = (
            <h1 style={{ "display": "inline" }}>Информация отсутствует. Добавть, пожалуйста, новую карточку автомобиля!</h1>
        )
        if (this.props.data.length > 0) {
            return (
                <div className="carList">
                    {carItemList}
                </div>
            )
        } else {
            return (
                <div className="carList" style={{"display": "inline-block", "text-align": "center", }}>
                    {elementWithoutInfoCar}
                </div>
            )
        }
    }
}

export default CarList;