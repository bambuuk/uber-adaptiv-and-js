import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import ChoiseCarView from "./ChoiseCarView";

import sedan from '../../img/cars/sedan.png';
import pickup from '../../img/cars/pickup.png';
import universal from '../../img/cars/universal.png';
import './choiseCar.sass';

const filterType = {
    sedan: 'Седан',
    pickup: 'Пикап',
    universal: 'Универсал',
}

class ChoiseCar extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { order: 1, title: "BMW M3", typeItem: { typeCar: "Седан", classComfort: "Средний" }, driver: "Пол Уокер", url: sedan, id: uuidv4() },
                { order: 2, title: "TOYOTA GT86", typeItem: { typeCar: "Седан", classComfort: "Люкс" }, driver: "Гарп", url: sedan, id: uuidv4() },
                { order: 3, title: "Nissan GTR", typeItem: { typeCar: "Седан", classComfort: "Люкс" }, driver: "Мугивара Луфи", url: sedan, id: uuidv4() },
                { order: 4, title: "Ford F-150", typeItem: { typeCar: "Пикап", classComfort: "Люкс" }, driver: "Эдвард Элрик", url: pickup, id: uuidv4() },
                { order: 5, title: "TOYOTA Tundra", typeItem: { typeCar: "Пикап", classComfort: "Люкс" }, driver: "Джек Воробей", url: pickup, id: uuidv4() },
                { order: 6, title: "Москвич Пирожок", typeItem: { typeCar: "Пикап", classComfort: "Эконом" }, driver: "Эдвард Элрик", url: pickup, id: uuidv4() },
                { order: 7, title: "Volkswagen Golf", typeItem: { typeCar: "Универсал", classComfort: "Средний" }, driver: "Доминик Торэтто", url: universal, id: uuidv4() },
            ],
            filter: 'all',
            selectedCar: 'Вы пока не выбрали автомобиль',
            currentCard: null
        }
    }

    // CarItem delete function. There is choise elem by id in this function.
    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    // filter change function
    onChangeFilter = (filterType) => {
        this.setState({ filter: filterType });
    }

    // Sort cars function. There are sort method and sorting methods in this function
    onSortCarItems = ( filter, data ) => {
        if (filterType[filter]) {
            return data.filter(item => item.typeItem.typeCar === filterType[filter]);
        } else if (filter === 'alphabet') {
            const res = data.sort((item1, item2) => item1.title > item2.title ? 1 : -1);
            console.log(res);
            return res;
        } else {
            return data;
        }
    }

    // Add cars function. There is spred operator in this function
    onAddItem = (title, typeCar, classComfort, driver, url) => {
        const carItem = [
            { order: this.state.data.length + 1, title, typeItem: { typeCar, classComfort }, driver, url, id: uuidv4() }
        ];
        this.setState(({ data }) => ({
            data: [...data, ...carItem]
        }))
    }

    onChangeSelectedCar = (title) => {
        this.setState({ selectedCar: title })
    }



    // ***************************************
    // downstairs functions for drag and drop
    // ***************************************


    
    dragStartHadler = (e, card) => {
        this.setState({ currentCard: card });
        /* send selected cards in state*/
    }

    dragEndHandler = (e) => {
        e.target.className = 'card card_drop';
    }

    dragOverHandler = (e) => {
        e.preventDefault();
        e.target.className = 'card card_drag';
    }

    dropHandler = (e, card) => {
        e.preventDefault();
        this.setState(state => {
            const copyData = [...state.data];
            const newData = copyData.map(c => {
                if (c.id === card.id) {
                return {...c, order: state.currentCard.order}
                }
                if (c.id === state.currentCard.id) {
                return {...c, order: card.order}
                }
                return c;
            })
            return {data: newData};
        })
        e.target.className = 'card card_drop';
    }

    sortCard = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    render() {
        const filter = this.state.filter;
        const data = [...this.state.data];
        const visibleCarItems = this.onSortCarItems(filter, data);

        return (
            <ChoiseCarView visibleCarItems={visibleCarItems}
                onChangeFilter={this.onChangeFilter}
                deleteItem={this.deleteItem}
                onAddItem={this.onAddItem}
                filter={this.state.filter}
                selectedCar={this.state.selectedCar}
                onChangeSelectedCar={this.onChangeSelectedCar} 
                dragStartHadler={this.dragStartHadler}
                dragEndHandler={this.dragEndHandler}
                dragOverHandler={this.dragOverHandler}
                dropHandler={this.dropHandler}/>
        )
    }
}

export default ChoiseCar;