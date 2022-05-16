import { Component } from "react";
import AddCarsView from "./AddCarsView";

import "./addCars.sass";

class AddCars extends Component {
    state = {
        title: '',
        typeCar: '',
        classComfort: '',
        driver: '',
        url: '',
    }

    onValueInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendCarItem = (e) => {
        e.preventDefault();
        if (this.state.typeCar === 'Седан' || this.state.typeCar === 'Пикап' || this.state.typeCar === 'Универсал') {
            this.props.onAddItem(this.state);
            this.setState({
                title: '',
                typeCar: '',
                classComfort: '',
                driver: '',
                url: ''
            })
        } else {
            alert('Тип автомобиля может быть: Седан, Пикап, Универсал. Пожалуйста, впишите один из предложенных вариантов')
        }
    }

    render() {
        return (
            <AddCarsView data={this.state} onValueInputChange={this.onValueInputChange} sendCarItem={this.sendCarItem}/>
        )
    }
}

export default AddCars;