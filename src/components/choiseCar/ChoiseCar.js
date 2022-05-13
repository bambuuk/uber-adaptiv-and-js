import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import ChoiseCarFilters from "../choiseCarFilters/ChoiseCarFilters";
import CarList from "../carList/CarList";
import AddCars from "../addCars/AddCars";

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
            const arr = [];
            data.forEach(item => {
                arr.push(item.title);
            })
            const arrSort = arr.sort();
            const res = [];
            arrSort.forEach(arrSortItem => {
                data.forEach(dataItem => {
                    if (dataItem.title === arrSortItem) {
                        res.push(dataItem);
                    }
                })
            })
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

    render() {
        const visibleCarItems = this.onSortCarItems(this.state);

        return (
            <section className="choiseCar">
                <div className="container">
                    <div className="title">Доступные варианты автомобилей</div>
                    <ChoiseCarFilters onChangeFilter={this.onChangeFilter} toggleAddCarsBlock={this.toggleAddCarsBlock}/>
                    <CarList data={visibleCarItems} onDelete={this.deleteItem} filter={this.filter} />
                    <AddCars onAddItem={this.onAddItem} isAddCarsBlock={this.isAddCarsBlock}/>
                </div>
            </section>
        )
    }
}

export default ChoiseCar;