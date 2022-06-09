import { Component } from "react";
import React from "react";
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
                {
                    order: 1, title: "BMW M3", typeItem: { typeCar: "Седан", classComfort: "Средний" },
                    driver: "Двэйн Джонсон", url: sedan, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 2, title: "TOYOTA GT86", typeItem: { typeCar: "Седан", classComfort: "Люкс" },
                    driver: "Джейк Джилленгол", url: sedan, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 3, title: "Nissan GTR", typeItem: { typeCar: "Седан", classComfort: "Люкс" },
                    driver: "Том Холанд", url: sedan, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 4, title: "Ford F-150", typeItem: { typeCar: "Пикап", classComfort: "Люкс" },
                    driver: "Александра Даддарио", url: pickup, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 5, title: "TOYOTA Tundra", typeItem: { typeCar: "Пикап", classComfort: "Люкс" },
                    driver: "Зэндая Мари", url: pickup, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 6, title: "Москвич Пирожок", typeItem: { typeCar: "Пикап", classComfort: "Эконом" },
                    driver: "Кристиан Бейл", url: pickup, id: uuidv4(), active: false, focus: false
                },

                {
                    order: 7, title: "Volkswagen Golf", typeItem: { typeCar: "Универсал", classComfort: "Средний" },
                    driver: "Том Хэнкс", url: universal, id: uuidv4(), active: false, focus: false
                },
            ],
            filter: 'all',
            selectedCar: 'Вы пока не выбрали автомобиль',
            currentCard: null,
            cardUntilCurrentCard: null,
            onFocusWithArrow: false,
            countClickArrow: null
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyboardClickForFocusCards)
    }

    onKeyboardClickForFocusCards = (e) => {
        const c = e.code;

        if (this.state.onFocusWithArrow === false && c !== 'Escape') {
            this.setState({ onFocusWithArrow: true });
        } else if (c === 'Escape') {
            this.setState(({ data }) => {
                const copyData = [...data];
                const onFocusCard = copyData.map(item => {
                    return { ...item, focus: false }
                });
                return { data: onFocusCard, onFocusWithArrow: false, countClickArrow: null }
            });
        }

        if (this.state.filter !== 'all' && (c === 'ArrowRight' || c === 'ArrowLeft')) {
            alert('На этом фильтре нет возможности передвигаться по карточкам с помощью стрелок клавиатуры!')
        } else {
            if (c === 'ArrowRight') {
                this.setState(({ countClickArrow, data }) => {
                    let count = countClickArrow;
                    if (count !== null && count < data.length - 1) {
                        return { countClickArrow: count + 1 }
                    } else if (count !== null && count === data.length - 1) {
                        return { countClickArrow: 0 }
                    } else if (count === null) {
                        return { countClickArrow: 0 }
                    } else {
                        return { countClickArrow: countClickArrow }
                    }
                })
                this.setState(({ data, countClickArrow }) => {

                    const copyData = [...data];
                    const onFocusCard = copyData.map((item, i) => {
                        if (i === countClickArrow) {
                            return { ...item, focus: true }
                        } else {
                            return { ...item, focus: false }
                        }
                    });

                    return { data: onFocusCard }
                });
            } else if (c === 'ArrowLeft') {

                this.setState(({ countClickArrow, data }) => {
                    let count = countClickArrow;
                    if (count !== null && count > 0) {
                        return { countClickArrow: count - 1 }
                    } else if (count !== null && count === 0) {
                        return { countClickArrow: data.length - 1 }
                    } else if (count === null) {
                        return { countClickArrow: 0 }
                    } else {
                        return { countClickArrow: countClickArrow }
                    }
                });

                this.setState(({ data, countClickArrow }) => {
                    const copyData = [...data];
                    const onFocusCard = copyData.map((item, i) => {
                        if (i === countClickArrow) {
                            return { ...item, focus: true }
                        } else {
                            return { ...item, focus: false }
                        }
                    });

                    return { data: onFocusCard }
                });

            } else if (e.code === 'KeyE' && this.state.onFocusWithArrow === true) {
                const copyData = [...this.state.data];
                const count = this.state.countClickArrow;
                const id = copyData[count];
                this.onActiveCard(id, count);
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyboardClickForFocusCards);
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    // filter change function
    onChangeFilter = (filterType) => {
        this.setState({ filter: filterType });
        if (filterType === 'alphabet') {
            alert('При использовании данного фильтра, функция перетаскивания карточек не работает!')
        }
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
            {
                order: this.state.data.length + 1, title, typeItem: { typeCar, classComfort },
                driver, url, id: uuidv4(), active: false, focus: false
            }
        ];
        this.setState(({ data }) => ({
            data: [...data, ...carItem]
        }))
    }

    onChangeSelectedCar = (title) => {
        this.setState({ selectedCar: title })
    }

    itemRefs = {};

    setRef = (ref, id) => {
        if (ref !== null && ref !== undefined) {
            this.itemRefs[id] = ref;
        }
    }

    onActiveCard = (id, i) => {

        this.setState(state => {
            const copyData = [...state.data];
            const activeItemInArr = copyData.map(item => {
                if (item.id === id) {
                    return { ...item, active: !item.active }
                } else {
                    return item
                }
            })
            return { data: activeItemInArr }
        });
        if (typeof (id) === 'string') {
            this.itemRefs[id].focus();
        } else {
            this.itemRefs[id.id].focus();
        }
    }

    // ***************************************
    // downstairs functions for drag and drop functionally
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
            const copyData = [...state.data]
            //const copyData = [...state.data];
            // console.log(copyData)
            /**
             * когда фильтрую массив данных, нужно заново переписать order уже в отсортированном массиве, после чего 
             * передавать правильные данные дальше и скорее всего, ордер переписывать нужно в onSortCarItems
             */
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
        this.setState({ currentCard: null })
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
                cardUntilCurrentCard={this.state.cardUntilCurrentCard}
                onActiveCard={this.onActiveCard}
                setRef={this.setRef} />
        )
    }
}

export default ChoiseCar;