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
            currentCard: null,
            cardUntilCurrentCard: null
        }
    }

    //componentDidUpdate(prevProps, prevState) {
    // if (this.state.filter === 'alphabet' && prevState.filter !== this.state.filter) {
    //     const copyData = [...this.state.data];
    //     copyData.sort((item1, item2) => item1.title > item2.title ? 1 : -1);
    //     const res = copyData.map((item, i) => {
    //         return {...item, order: i+1}
    //     })
    //     console.log(res);
    //     this.setState({data: copyData})
    // }
    // console.log('aga', this.state.data)
    //}

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

    sortCard = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    // Sort cars function. There are sort method and sorting methods in this function
    onSortCarItems = (filter, data) => {
        if (filterType[filter]) {
            return data.filter(item => item.typeItem.typeCar === filterType[filter]);
        } else if (filter === 'alphabet') {
            const res = data.sort((item1, item2) => item1.title > item2.title ? 1 : -1);
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
        this.setState({ cardUntilCurrentCard: null });
    }

    dragOverHandler = (e, id) => {
        e.preventDefault();
        const cardUntilCurrentCard = this.state.cardUntilCurrentCard;
        if (cardUntilCurrentCard !== id) {
            this.setState({ cardUntilCurrentCard: id });
        }
    }

    dropHandler = (e, card) => {
        e.preventDefault();
        this.setState({ cardUntilCurrentCard: null });
        this.setState(state => {
            const copyData = [...state.data];
            const newData = copyData.map(c => {
                if (c.id === card.id) {
                    return { ...c, order: state.currentCard.order }
                }
                if (c.id === state.currentCard.id) {
                    return { ...c, order: card.order }
                }
                return c;
            })
            return { data: newData.sort(this.sortCard) };
        })
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
                dropHandler={this.dropHandler}
                sortCard={this.sortCard}
                cardUntilCurrentCard={this.state.cardUntilCurrentCard} />
        )
    }
}

export default ChoiseCar;