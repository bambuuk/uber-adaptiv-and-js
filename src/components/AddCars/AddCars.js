import { Component, createRef } from "react";
import AddCarsView from "./AddCarsView";
import PropTypes from 'prop-types';

const typeCarList = ['Седан', 'Пикап', 'Универсал'];

class AddCars extends Component {

    state = {
        title: '',
        typeCar: '',
        classComfort: '',
        driver: '',
        url: '',
    }

    myRef = createRef();

    componentDidMount() {
        this.myRef.current.focus();
    }

    onValueInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // send info abount new car and zeroing AddCars' state
    sendCarItem = (e) => {
        e.preventDefault();
        const {typeCar} = this.state;
        if (typeCarList.includes(typeCar)) {
            const { title, typeCar, classComfort, driver, url } = this.state;
            this.props.onAddItem(title, typeCar, classComfort, driver, url);
            this.setState({
                title: '',
                typeCar: '',
                classComfort: '',
                driver: '',
                url: ''
            })
        } else {
            alert(`Тип автомобиля может быть: Седан, Пикап, Универсал. 
            Пожалуйста, впишите один из предложенных вариантов`)
        }
    }

    onResetItem = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
            typeCar: '',
            classComfort: '',
            driver: '',
            url: ''
        })
    }

    render() {
        return (
            <AddCarsView
                data={this.state}
                onValueInputChange={this.onValueInputChange}
                sendCarItem={this.sendCarItem}
                onResetItem={this.onResetItem}
                myRef={this.myRef} />
        )
    }
}

AddCars.propTypes = {
    onAddItem: PropTypes.func
}

export default AddCars;