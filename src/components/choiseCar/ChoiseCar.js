import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import ChoiseCarView from "./ChoiseCarView";

import sedan from '../../img/cars/sedan.png';
import pickup from '../../img/cars/pickup.png';
import universal from '../../img/cars/universal.png';
import './choiseCar.sass';

class ChoiseCar extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { title: "BMW M3", typeItem: { typeCar: "Седан", classComfort: "Средний" }, driver: "Пол Уокер", url: sedan, id: uuidv4() },
                { title: "TOYOTA GT86", typeItem: { typeCar: "Седан", classComfort: "Люкс" }, driver: "Гарп", url: sedan, id: uuidv4() },
                { title: "Nissan GTR", typeItem: { typeCar: "Седан", classComfort: "Люкс" }, driver: "Мугивара Луфи", url: sedan, id: uuidv4() },
                { title: "Ford F-150", typeItem: { typeCar: "Пикап", classComfort: "Люкс" }, driver: "Эдвард Элрик", url: pickup, id: uuidv4() },
                { title: "TOYOTA Tundra", typeItem: { typeCar: "Пикап", classComfort: "Люкс" }, driver: "Джек Воробей", url: pickup, id: uuidv4() },
                { title: "Москвич Пирожок", typeItem: { typeCar: "Пикап", classComfort: "Эконом" }, driver: "Эдвард Элрик", url: pickup, id: uuidv4() },
                { title: "Volkswagen Golf", typeItem: { typeCar: "Универсал", classComfort: "Средний" }, driver: "Доминик Торэтто", url: universal, id: uuidv4() },
            ],
            filter: 'all',
            selectedCar: 'Вы пока не выбрали автомобиль'
        }
    }

    // CarItem delete function. There is choise elem by id in this function.
    deleteItem = (id) => {
        this.setState(({ data }) => {

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // filter change function
    onChangeFilter = (filterType) => {
        this.setState({ filter: filterType });
    }

    // Sort cars function. There are sort method and sorting methods in this function
    onSortCarItems = ({ filter, data }) => {
        if (filter === 'sedan') {
            return data.filter(item => item.typeItem.typeCar === 'Седан');
        } else if (filter === 'pickup') {
            return data.filter(item => item.typeItem.typeCar === 'Пикап');
        } else if (filter === 'universal') {
            return data.filter(item => item.typeItem.typeCar === 'Универсал');
        } else if (filter === 'alphabet') {

            const res = data.sort((item1, item2) => item1.title > item2.title ? 1 : -1);

            return res;
        } else {
            return data;
        }
    }

    // Add cars function. There is spred operator in this function
    onAddItem = ({ title, typeCar, classComfort, driver, url }) => {
        const carItem = [
            { title, typeItem: { typeCar, classComfort }, driver, url, id: uuidv4() }
        ];
        this.setState(({data}) => ({
            data: [...data, ...carItem]
        }))
    }

    onChangeSelectedCar = (title) => {
        this.setState({selectedCar: title})
    }

    render() {
        const visibleCarItems = this.onSortCarItems(this.state);

        return (
            <ChoiseCarView visibleCarItems={visibleCarItems} 
                       onChangeFilter={this.onChangeFilter} 
                       deleteItem={this.deleteItem}
                       onAddItem={this.onAddItem}
                       filter={this.state.filter}
                       selectedCar={this.state.selectedCar}
                       onChangeSelectedCar={this.onChangeSelectedCar}/>
        )
    }
}

export default ChoiseCar;